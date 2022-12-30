export enum TRANSACTION_TYPE {
  SEND = 'SEND',
}

export type TTranx = {
  chainId: string;
  chainIdHex?: string;
  amount: number;
  amountHex?: string;
  amountValue?: number;
  gasLimit: number;
  gasLimitHex?: string;
  gasPrice: number;
  gasPriceValue?: number;
  gasPriceHex?: string;
  contractAddress: string;
  contractDecimals: number;
  nonce: number;
  nonceHex?: string;
  toAddress?: string;
  fromAddress: string;
  coinType: string;
  type: string;
  symbol?: string;
  blockchain?: string;
  isNative?: boolean;
  transactionType: TRANSACTION_TYPE.SEND;
  data?: string;
  denom?: string;
  blockHash?: string;
  value?: string;
  splTokenRegistered?: boolean;
  valueHex?: string;
  memo?: string;
  chainName?: string;
  accountNumber?: number;
  sequence?: number;
  dataList?: Array<string>;
  v?: '0x01'; 
  r?: '0x00';
  s?: '0x00';
  path?: string;
  hardwareType?: string;
  txBuff?: Buffer;
};
