import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const ZkEVM = {
  index: 8,
  id: CHAINS_IDS.ZKEVM,
  name: 'Polygon zkEVM',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygonzkevm/info/logo.png',
  coinId: 10001101,
  symbol: 'ETH',
  decimals: 18,
  blockchain: CHAINS_ENUMS.ETHEREUM,
  derivation: [
    {
      path: "m/44'/60'/0'/0/0",
    },
  ],
  curve: 'secp256k1',
  publicKeyType: 'secp256k1Extended',
  chainId: '1101',
  explorer: {
    url: 'https://zkevm.polygonscan.com',
    explorerName: 'zkEVM Explorer',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://zkevm.polygon.technology/',
    rpc: 'https://zkevm-rpc.com/',
  },
};
