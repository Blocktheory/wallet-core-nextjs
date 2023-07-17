import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Juno = {
  index: 31,
  id: CHAINS_IDS.JUNO,
  name: 'Juno',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/juno/info/logo.png',
  symbol: 'JUNO',
  coinId: 10000120,
  decimals: 6,
  chainId: 'juno-1',
  blockchain: CHAINS_ENUMS.COSMOS,
  derivation: [
    {
      path: "m/44'/118'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  hrp: 'juno',
  denom: 'ujuno',
  explorer: {
    url: 'https://www.mintscan.io/juno',
    explorerName: 'Mintscan',
    txPath: '/txs/',
    accountPath: '/account/',
  },
  info: {
    url: 'https://www.junonetwork.io/',
    rpc: 'https://rpc.juno.strange.love/',
  },
};
