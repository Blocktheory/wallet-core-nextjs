import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const MultiversX = {
  index: 37,
  id: CHAINS_IDS.MULTIVERSX,
  name: 'MultiversX',
  alias: 'Elrond',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/elrond/info/logo.png',
  coinId: 508,
  symbol: 'eGLD',
  decimals: 18,
  blockchain: CHAINS_ENUMS.MULTIVERSX,
  derivation: [
    {
      path: "m/44'/508'/0'/0'/0'",
    },
  ],
  curve: 'ed25519',
  publicKeyType: 'ed25519',
  chainId: '508',
  hrp: 'erd',
  explorer: {
    explorerName: 'MultiversX Explorer',
    url: 'https://explorer.multiversx.com',
    txPath: '/transactions/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://multiversx.com/',
    rpc: 'https://api.multiversx.com',
  },
};
