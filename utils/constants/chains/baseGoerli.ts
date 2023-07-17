import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const BaseGoerli = {
  index: 10,
  id: CHAINS_IDS.BASEGOERLI,
  name: 'Base Goerli',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/base/info/logo.svg',
  coinId: 84531,
  symbol: 'ETH',
  chainId: '84531',
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
  explorer: {
    url: 'https://goerli.basescan.org/',
    explorerName: 'Goerli BaseScan',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://goerli.base.org/',
    rpc: 'https://goerli.base.org',
  },
  isTestNet: true,
};
