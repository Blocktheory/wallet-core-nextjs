import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const CryptoORG = {
  index: 31,
  id: CHAINS_IDS.CRYPTOORG,
  name: 'Crypto.org',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/cryptoorg/info/logo.png',
  symbol: 'CRO',
  coinId: 394,
  decimals: 8,
  chainId: 'crypto-org-chain-mainnet-1',
  blockchain: CHAINS_ENUMS.COSMOS,
  derivation: [
    {
      path: "m/44'/394'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  hrp: 'cro',
  denom: 'basecro',
  explorer: {
    url: 'https://crypto.org/explorer',
    explorerName: 'Crypto Explorer',
    txPath: '/tx/',
    accountPath: '/account/',
  },
  info: {
    url: 'https://crypto.org/',
    rpc: 'https://mainnet.crypto.org:1317/',
  },
};
