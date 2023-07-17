import { CHAINS_ENUMS, CHAINS_IDS } from "..";

export const Agoric = {
    index: 31,
    id: CHAINS_IDS.AGORIC,
    name: "Agoric",
    logo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/agoric/info/logo.png",
    symbol: "BLD",
    coinId: 564,
    decimals: 6,
    chainId: "agoric-3",
    blockchain: CHAINS_ENUMS.COSMOS,
    derivation: [
        {
            path: "m/44'/564'/0'/0/0",
        },
    ],
    curve: "secp256k1",
    publicKeyType: "secp256k1",
    hrp: "agoric",
    denom: "ubld",
    explorer: {
        url: "https://atomscan.com/agoric",
        explorerName: "Atom Scan",
        txPath: "/transactions/",
        accountPath: "/accounts/",
    },
    info: {
        url: "https://agoric.com/",
        rpc: "https://main.rpc.agoric.net/",
    },
};
