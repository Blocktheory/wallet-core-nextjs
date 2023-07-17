import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Solana = {
  index: 5,
  id: CHAINS_IDS.SOLANA,
  name: 'Solana',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/info/logo.png',
  coinId: 501,
  symbol: 'SOL',
  decimals: 9,
  blockchain: CHAINS_ENUMS.SOLANA,
  derivation: [
    { path: "m/44'/501'/0'" },
    {
      name: 'solana',
      path: "m/44'/501'/0'/0'",
    },
  ],
  curve: 'ed25519',
  publicKeyType: 'ed25519',
  chainId: '245022934',
  explorer: {
    url: 'https://solscan.io',
    explorerName: 'Solana Explorer',
    txPath: '/tx/',
    accountPath: '/account/',
  },
  info: {
    url: 'https://solana.com',
    rpc: `https://api.mainnet-beta.solana.com`,
  },
};
