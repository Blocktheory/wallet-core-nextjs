import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Cosmoshub = {
  index: 25,
  id: CHAINS_IDS.COSMOSHUB,
  name: 'Cosmos Hub',
  alias: 'Cosmos',
  coinId: 118,
  symbol: 'ATOM',
  decimals: 6,
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/cosmos/info/logo.png',
  chainId: 'cosmoshub-4',
  blockchain: CHAINS_ENUMS.COSMOS,
  derivation: [
    {
      path: "m/44'/118'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  hrp: 'cosmos',
  denom: 'uatom',
  explorer: {
    url: 'https://mintscan.io/cosmos',
    explorerName: 'Mint Scan',
    txPath: '/txs/',
    accountPath: '/account/',
  },
  info: {
    url: 'https://cosmos.network',
    rpc: 'https://rpc.cosmos.network',
  },
};
