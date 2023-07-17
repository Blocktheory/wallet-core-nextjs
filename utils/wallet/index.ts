import { TTranx } from "./types";
import * as bs58 from "bs58";
import Long from "long";
import { TW, WalletCore } from "@trustwallet/wallet-core";
export class Wallet {
  CoinType: WalletCore["CoinType"];
  HexCoding: WalletCore["HexCoding"];
  AnySigner: WalletCore["AnySigner"];
  HDWallet: WalletCore["HDWallet"];
  PublicKey: WalletCore["PublicKey"];
  AnyAddress: WalletCore["AnyAddress"];
  PrivateKey: WalletCore["PrivateKey"];
  Mnemonic: WalletCore["Mnemonic"];
  Curve: WalletCore["Curve"];
  TW: typeof TW;
  SolanaAddress: WalletCore["SolanaAddress"];
  StoredKey: WalletCore["StoredKey"];

  constructor(_walletCore: WalletCore, _tw = TW) {
    const {
      HDWallet,
      CoinType,
      AnySigner,
      HexCoding,
      PublicKey,
      PrivateKey,
      Mnemonic,
      Curve,
      AnyAddress,
      SolanaAddress,
      StoredKey,
    } = _walletCore;
    this.CoinType = CoinType;
    this.AnySigner = AnySigner;
    this.HexCoding = HexCoding;
    this.HDWallet = HDWallet;
    this.PublicKey = PublicKey;
    this.PrivateKey = PrivateKey;
    this.Mnemonic = Mnemonic;
    this.Curve = Curve;
    this.TW = _tw;
    this.AnyAddress = AnyAddress;
    this.SolanaAddress = SolanaAddress;
    this.StoredKey = StoredKey;
  }

  signNearTx = async (tx: TTranx, prvKey: string) => {
    const keypair = this.PrivateKey.createWithData(Buffer.from(prvKey));
    const txDataInput = TW.NEAR.Proto.SigningInput.create({
      nonce: Long.fromString(tx.nonce.toString()),
      blockHash: bs58.decodeUnsafe(tx.blockHash ?? ""),
      signerId: tx.fromAddress,
      receiverId: tx.toAddress,
      actions: [
        {
          transfer: TW.NEAR.Proto.Transfer.create({
            deposit: toBufferLE(BigInt(tx.amountValue ?? 0), 16),
          }),
        },
      ],
      privateKey: keypair.data(),
    });
    const output = TW.NEAR.Proto.SigningInput.encode(txDataInput).finish();
    const outputData = this.AnySigner.sign(output, this.CoinType.near);
    const NearSigningOutput = TW.NEAR.Proto.SigningOutput.decode(outputData);
    const txHash = Buffer.from(NearSigningOutput.signedTransaction).toString(
      "base64"
    );
    return txHash;
  };
}

export function toBufferBE(num: bigint, width: number): Buffer {
  const hex = num.toString(16);
  const buf = Buffer.from(hex.padStart(width * 2, "0"), "hex");
  if (buf.length != width) throw Error("int too big");
  return buf;
}

export function toBufferLE(num: bigint, width: number): Buffer {
  return toBufferBE(num, width).reverse();
}


export const getCoinType = (chainId: string, walletCore: WalletCore) => {
  const coinType = walletCore.CoinType;
  switch (chainId) {
    case 'ethereum':
      return coinType.ethereum;
    case 'bsc':
      return coinType.smartChain;
    case 'polygon':
      return coinType.polygon;
    case 'avalanchec':
      return coinType.avalancheCChain;
    case 'solana':
      return coinType.solana;
    case 'tezos':
      return coinType.tezos;
    case 'fantom':
      return coinType.fantom;
    case 'arbitrum':
      return coinType.arbitrum;
    case 'aurora':
      return coinType.aurora;
    case 'optimism':
      return coinType.optimism;
    case 'xdai':
      return coinType.xdai;
    case 'celo':
      return coinType.celo;
    case 'rsk':
      return coinType.rootstock;
    case 'moonriver':
      return coinType.moonriver;
    case 'moonbeam':
      return coinType.moonbeam;
    case 'metis':
      return coinType.metis;
    case 'boba':
      return coinType.boba;
    case 'algorand':
      return coinType.algorand;
    case 'harmony':
      return coinType.harmony;
    case 'zilliqa':
      return coinType.zilliqa;
    case 'bluzelle':
      return coinType.bluzelle;
    case 'tomochain':
      return coinType.tomoChain;
    case 'elrond':
      return coinType.multiversX;
    case 'binance':
      return coinType.binance;
    case 'kava':
      return coinType.kava;
    case 'bandchain':
      return coinType.bandChain;
    case 'klaytn':
      return coinType.klaytn;
    case 'iotex':
      return coinType.ioTeX;
    case 'bnb':
      return coinType.smartChain;
    case 'near':
      return coinType.near;
    case 'evmos':
      return coinType.evmos;
    case 'cronos':
      return coinType.cronosChain;
    case 'polkadot':
      return coinType.polkadot;
    case 'aptos':
      return coinType.aptos;
    case 'cosmoshub':
      return coinType.cosmos;
    case 'osmosis':
      return coinType.osmosis;
    case 'terra-classic':
      return coinType.terra;
    case 'secretnetwork':
      return coinType.secret;
    case 'evmos-cosmos':
      return coinType.nativeEvmos;
    case 'persistence':
      return coinType.persistence;
    case 'axelar':
      return coinType.axelar;
    case 'sommelier':
      return coinType.sommelier;
    case 'cryptoorgchain':
      return coinType.cryptoOrg;
    case 'injective':
      return coinType.nativeInjective;
    case 'emoney':
      return coinType.cosmos;
    case 'umee':
      return coinType.umee;
    case 'kujira':
      return coinType.kujira;
    case 'juno':
      return coinType.juno;
    case 'agoric':
      return coinType.agoric;
    case 'shentu':
      return coinType.cosmos;
    case 'crescent':
      return coinType.crescent;
    case 'akash':
      return coinType.akash;
    case 'regen':
      return coinType.cosmos;
    case 'sentinel':
      return coinType.cosmos;
    case 'stride':
      return coinType.stride;
    case 'impacthub':
      return coinType.cosmos;
    case 'gravitybridge':
      return coinType.cosmos;
    case 'bostrom':
      return coinType.cosmos;
    case 'stargaze':
      return coinType.stargaze;
    case 'sui':
      return coinType.sui;
    case 'sui-testnet':
      return coinType.sui;
    case 'zkevm':
      return coinType.polygonzkEVM;
    case 'zksync':
      return coinType.zksync;
    default:
      return coinType.ethereum;
  }
};

