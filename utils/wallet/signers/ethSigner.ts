import { TW, WalletCore } from '@trustwallet/wallet-core';
import { ISigningInput, TRANSACTION_TYPE, TTranx } from '../types';

export class Wallet {
  CoinType: WalletCore['CoinType'];
  HexCoding: WalletCore['HexCoding'];
  AnySigner: WalletCore['AnySigner'];
  PrivateKey: WalletCore['PrivateKey'];
  EthereumMessageSigner: WalletCore['EthereumMessageSigner'];
  TW: typeof TW;

  constructor(_walletCore: WalletCore, _tw = TW) {
    const { CoinType, AnySigner, HexCoding, PrivateKey, AnyAddress, EthereumMessageSigner } = _walletCore;
    this.CoinType = CoinType;
    this.AnySigner = AnySigner;
    this.HexCoding = HexCoding;
    this.PrivateKey = PrivateKey;
    this.EthereumMessageSigner = EthereumMessageSigner;

    this.TW = _tw;
  }
  getEthSigningInput = (tx: TTranx, prvKey: string): ISigningInput => {
    const txDataInput = TW.Ethereum.Proto.Transaction.create();
    let txSignInputData: ISigningInput = {
      toAddress: tx.toAddress,
      chainId: Buffer.from(tx.chainIdHex ?? '', 'hex'),
      nonce: Buffer.from(tx.nonceHex ?? '', 'hex'),
      gasPrice: Buffer.from(tx.gasPriceHex ?? '', 'hex'),
      gasLimit: Buffer.from(tx.gasLimitHex ?? '', 'hex'),
      privateKey: this.PrivateKey.createWithData(this.HexCoding.decode(prvKey)).data(),
    };
    switch (tx.transactionType) {
      case TRANSACTION_TYPE.SEND:
        if (!tx.isNative) {
          txDataInput.erc20Transfer = TW.Ethereum.Proto.Transaction.ERC20Transfer.create({
            to: tx.toAddress,
            amount: Buffer.from(tx.amountHex ?? '', 'hex'),
          });
          txSignInputData = {
            ...txSignInputData,
            toAddress: tx.contractAddress,
          };
        } else {
          txDataInput.transfer = TW.Ethereum.Proto.Transaction.Transfer.create({
            amount: Buffer.from(tx.amountHex ?? '', 'hex'),
          });
        }
        txSignInputData = {
          ...txSignInputData,
          transaction: txDataInput,
        };
        break;
      default:
        break;
    }
    return txSignInputData;
  };

  signEthTx = async (tx: TTranx, prvKey: string) => {
    const signingInput = this.getEthSigningInput(tx, prvKey);
    const input = TW.Ethereum.Proto.SigningInput.create(signingInput);
    const encoded = TW.Ethereum.Proto.SigningInput.encode(input).finish();
    const outputData = this.AnySigner.sign(encoded, this.CoinType.ethereum);
    const output = TW.Ethereum.Proto.SigningOutput.decode(outputData);
    return this.HexCoding.encode(output.encoded);
  };

  signEthMessage = async (msg: string, prvKey: string) => {
    const prvKeyData = this.PrivateKey.createWithData(this.HexCoding.decode(prvKey));
    try {
      let output = this.EthereumMessageSigner.signTypedMessage(prvKeyData, JSON.stringify(msg));
      if (output && !output.startsWith('0x')) {
        output = '0x' + output;
      }
      return output;
    } catch (err) {
      return 'error';
    }
  };
}
