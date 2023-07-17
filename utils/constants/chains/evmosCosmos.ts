import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const EvmosCosmos = {
  index: 31,
  id: CHAINS_IDS.EVMOSCOSMOS,
  name: 'NativeEvmos-Cosmos',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/nativeevmos/info/logo.png',
  coinId: 20009001,
  symbol: 'EVMOS',
  decimals: 18,
  chainId: 'evmos_9001-2',
  blockchain: CHAINS_ENUMS.COSMOS,
  derivation: [
    {
      path: "m/44'/394'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  hrp: 'evmos',
  denom: 'aevmos',
  explorer: {
    url: 'https://mintscan.io/evmos',
    txPath: '/txs/',
    accountPath: '/account/',
    explorerName: 'Evmos Cosmos Explorer',
  },
  info: {
    url: 'https://evmos.org/',
    rpc: 'https://tendermint.bd.evmos.org:26657',
  },
};
