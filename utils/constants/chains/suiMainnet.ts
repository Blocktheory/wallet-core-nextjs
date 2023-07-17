import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const SuiMainnet = {
  index: 6,
  id: CHAINS_IDS.SUI,
  name: 'Sui Mainnet',
  coinId: 784,
  symbol: 'SUI',
  decimals: 9,
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/sui/info/logo.png',
  chainId: 'sui',
  blockchain: CHAINS_ENUMS.SUI,
  derivation: [
    {
      path: "m/44'/784'/0'/0'/0'",
    },
  ],
  curve: 'ed25519',
  publicKeyType: 'ed25519',
  explorer: {
    url: 'https://explorer.sui.io',
    txPath: '/txblock/',
    accountPath: '/addresses/',
    explorerName: 'Sui Explorer',
  },
  info: {
    url: 'https://sui.io/',
    rpc: 'https://rpc.mainnet.sui.io/',
  },
};
