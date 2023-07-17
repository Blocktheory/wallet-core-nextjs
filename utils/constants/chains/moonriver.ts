import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Moonriver = {
  index: 16,
  id: CHAINS_IDS.MOONRIVER,
  name: 'Moonriver',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/moonriver/info/logo.png',
  coinId: 10001285,
  symbol: 'MOVR',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/60'/0'/0/0",
      basePath: "m/44'/60'/${index}'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '1285',
  explorer: {
    explorerName: 'Moonriver Explorer',
    url: 'https://moonriver.moonscan.io',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://moonbeam.network/networks/moonriver',
    rpc: 'https://moonriver.public.blastapi.io',
  },
};
