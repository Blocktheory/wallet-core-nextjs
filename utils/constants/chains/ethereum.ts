import { CHAINS_ENUMS, CHAINS_IDS } from '..';

export const Ethereum = {
  index: 1,
  id: CHAINS_IDS.ETHEREUM,
  name: 'Ethereum',
  logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
  coinId: 60,
  symbol: 'ETH',
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
  chainId: '1',
  explorer: {
    url: 'https://etherscan.io',
    explorerName: 'Etherscan',
    txPath: '/tx/',
    accountPath: '/address/',
  },
  info: {
    url: 'https://ethereum.org',
    rpc: `https://eth.llamarpc.com`,
  },
};
