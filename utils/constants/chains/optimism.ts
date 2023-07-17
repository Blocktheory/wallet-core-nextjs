import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Optimism = {
  index: 12,
  id: CHAINS_IDS.OPTIMISM,
  name: 'Optimism',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/info/logo.png',
  coinId: 10000070,
  symbol: 'ETH',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/60'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '10',
  explorer: {
    url: 'https://optimistic.etherscan.io',
    explorerName: 'Optimistic Ethereum L2 Explorer',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://optimism.io/',
    rpc: `https://opt-mainnet.g.alchemy.com/v2/demo`,
  },
};
