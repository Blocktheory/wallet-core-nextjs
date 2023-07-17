import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const SecretNetwork = {
  index: 29,
  id: CHAINS_IDS.SECRETNETWORK,
  name: 'Secret Network',
  alias: 'secret',
  coinId: 529,
  symbol: 'SCRT',
  decimals: 6,
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/secret/info/logo.png',
  chainId: 'secret-4',
  blockchain: CHAINS_ENUMS.COSMOS,
  derivation: [
    {
      path: "m/44'/529'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1',
  hrp: 'secret',
  denom: 'uscrt',
  explorer: {
    url: 'https://mintscan.io/secret',
    explorerName: 'Mint Scan',
    txPath: '/txs/',
    accountPath: '/account/',
  },
  info: {
    url: 'https://scrt.network/',
    rpc: ' https://rpc.secret.express',
  },
};
