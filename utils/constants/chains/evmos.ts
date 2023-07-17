import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Evmos = {
  index: 22,
  id: CHAINS_IDS.EVMOS,
  name: 'Evmos-EVM',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/evmos/info/logo.png',
  coinId: 10009001,
  symbol: 'EVMOS',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/60'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '9001',
  explorer: {
    url: 'https://evm.evmos.org',
    explorerName: 'Evmos Explorer',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://evmos.org/',
    rpc: 'https://eth.bd.evmos.org:8545',
  },
};
