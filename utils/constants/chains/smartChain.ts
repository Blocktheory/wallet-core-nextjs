import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const SmartChain = {
  index: 2,
  id: CHAINS_IDS.BSC,
  name: 'BNB Smart Chain',
  alias: 'Binance Smart Chain (BSC)',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/info/logo.png',
  coinId: 20000714,
  symbol: 'BNB',
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
  chainId: '56',
  explorer: {
    url: 'https://bscscan.com',
    explorerName: 'BscScan',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://www.binance.org/en/smartChain',
    rpc: 'https://bsc-dataseed.binance.org/',
  },
};
