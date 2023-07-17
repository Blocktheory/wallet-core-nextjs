import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Harmony = {
  index: 32,
  id: CHAINS_IDS.HARMONY,
  name: 'Harmony',
  alias: 'Harmony One',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/harmony/info/logo.svg',
  coinId: 1023,
  symbol: 'ONE',
  decimals: 18,
  blockchain: CHAINS_ENUMS.HARMONY,
  derivation: [
    {
      path: "m/44'/1023'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '1666600000',
  hrp: 'one',
  explorer: {
    url: 'https://explorer.harmony.one',
    explorerName: 'Harmony Explorer',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://harmony.one',
    rpc: 'https://api.harmony.one',
  },
};
