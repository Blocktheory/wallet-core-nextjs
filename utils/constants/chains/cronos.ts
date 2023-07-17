import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Cronos = {
  index: 12,
  id: CHAINS_IDS.CRONOS,
  name: 'Cronos',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/cronos/info/logo.png',
  coinId: 10000025,
  symbol: 'CRO',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/60'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '25',
  explorer: {
    url: 'https://cronoscan.com',
    explorerName: 'Cronos Scan',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://cronos.org',
    rpc: 'https://evm-cronos.crypto.org',
  },
};
