import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Zilliqa = {
  index: 34,
  id: CHAINS_IDS.ZILLIQA,
  name: 'Zilliqa',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/zilliqa/info/logo.png',
  coinId: 313,
  symbol: 'ZIL',
  decimals: 12,
  blockchain: CHAINS_ENUMS.ZILLIQA,
  derivation: [
    {
      path: "m/44'/313'/0'/0/0",
    },
  ],
  chainId: '313',
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  hrp: 'zil',
  explorer: {
    url: 'https://viewblock.io',
    explorerName: 'Viewblock',
    txPath: '/zilliqa/tx/',
    accountPath: '/zilliqa/address/',
  },
  info: {
    url: 'https://zilliqa.com',
    rpc: 'https://api.zilliqa.com/',
  },
  prefix: 'zil',
};
