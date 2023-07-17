import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Near = {
  index: 8,
  id: CHAINS_IDS.NEAR,
  name: 'NEAR',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/near/info/logo.png',
  coinId: 397,
  chainId: 'near',
  symbol: 'NEAR',
  decimals: 24,
  blockchain: CHAINS_ENUMS.NEAR,
  derivation: [
    {
      path: "m/44'/397'/0'",
    },
  ],
  curve: 'ed25519',
  publicKeyType: 'ed25519',
  explorer: {
    url: 'https://explorer.near.org',
    explorerName: 'NEAR Explorer',
    txPath: '/transactions/',
    accountPath: '/accounts/',
  },
  info: {
    url: 'https://nearprotocol.com',
    rpc: 'https://rpc.mainnet.near.org',
  },
  prefix: 'near',
};
