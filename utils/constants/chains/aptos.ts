import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Aptos = {
  index: 6,
  id: CHAINS_IDS.APTOS,
  name: 'Aptos',
  coinId: 637,
  symbol: 'APT',
  decimals: 8,
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/aptos/info/logo.png',
  chainId: '637',
  blockchain: CHAINS_ENUMS.APTOS,
  derivation: [
    {
      path: "m/44'/637'/0'/0'/0'",
    },
  ],
  curve: 'ed25519',
  publicKeyType: 'ed25519',
  explorer: {
    url: 'https://explorer.aptoslabs.com',
    explorerName: 'Aptos Explorer',
    txPath: '/txn/',
    accountPath: '/account/',
  },
  info: {
    url: 'https://aptoslabs.com/',
    rpc: 'https://fullnode.mainnet.aptoslabs.com/v1',
  },
};
