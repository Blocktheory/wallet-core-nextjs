import Head from "next/head";
import styles from "../styles/Home.module.css";
import { TRANSACTION_TYPE, TTranx } from "../utils/wallet/types";
import { initWasm } from "@trustwallet/wallet-core";
import { Wallet } from "../utils/wallet";
import { useState } from "react";
export default function Home() {
  const txData: TTranx = {
    chainId: "near",
    amount: 0.025,
    contractAddress: "0x1fa4a73a3f0133f0025378af00236f3abdee5d63",
    contractDecimals: 24,
    nonce: 81780636000000,
    fromAddress:
      "e2f235b702f8d77aff6187f4a2a7df197716e00803ebd313733c24ef5d863b41",
    amountHex: "054b40b1f852bdc00000",
    blockHash: "CQHB33uE2hQceH11CYdiLBpbCjF69ZCSrqf3WgkExuP4",
    toAddress:
      "e2f235b702f8d77aff6187f4a2a7df197716e00803ebd313733c24ef5d863b41",
    amountValue: 25000000000000002097152,
    gasLimit: 0,
    gasPrice: 0,
    transactionType: TRANSACTION_TYPE.SEND
  };

  const prvKey =
    process.env.NEXT_PRV_KEY ?? "";
  const [hash, setHash] = useState("");

  const signTx = async () => {
    const walletCore = await initWasm();
    const wallet = new Wallet(walletCore);
    const txHash = await wallet.signNearTx(txData, prvKey);
    setHash(txHash);
  };

  return (
    <>
      <Head>
        <title>Wallet Core Demo App</title>
        <meta name="description" content="Demo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div className="relative w-80 flex flex-col">
            <button
              onClick={() => {
                signTx();
              }}
              className="mt-10 border border-black p-2 rounded-lg"
            >
              <span id="show-more" className="dark:text-white ">
                {"Sign Near"}
              </span>
            </button>
            <p className="text-center break-all mt-5">{hash && hash}</p>
          </div>
        </div>
      </main>
    </>
  );
}
