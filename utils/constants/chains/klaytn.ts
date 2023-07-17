import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Klaytn = {
  index: 11,
  id: CHAINS_IDS.KLAYTN,
  name: 'Klaytn',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/klaytn/info/logo.png',
  coinId: 10008217,
  symbol: 'KLAY',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/60'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '8217',
  explorer: {
    explorerName: 'Klaytn Explorer',
    url: 'https://scope.klaytn.com',
    txPath: '/tx/',
    accountPath: '/account/',
  },
  info: {
    url: 'https://klaytn.foundation',
    rpc: 'https://public-node-api.klaytnapi.com/v1/cypress',
  },
};
