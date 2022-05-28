import { ConnectType } from "@terra-money/wallet-provider";
import React from "react";


export const WalletConnectButton = ({
  status,
  wallets,
  install,
  connect,
  disconnect,
  availableConnectTypes,
  availableInstallTypes,
  WalletStatus,
  supportFeatures
}) => {
  return (

    <div>
        <h1>Kyura Connect TerraStation Wallet</h1>
        <section>
          <div>
            <button
                key={"starttxbtn"}
                onClick={() => {
                  console.log("abc")
                  console.log(supportFeatures)
                }
                  
                }
              >
              Start TX
            </button>
          </div>
        </section>
        <section>
          <pre>
            {JSON.stringify(
              {
                status,
                wallets
              },
              null,
              2,
            )}
          </pre>
        </section>

      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <>
          {availableInstallTypes.map((connectType) => (
            <button
              key={"install-" + connectType}
              onClick={() => install(connectType)}
            >
              Install
            </button>
          ))}
          {availableConnectTypes.map(
            (connectType) => (
            <button
              key={"connect-" + connectType}
              className={connectType}
              onClick={() => connect(connectType)}
            >
             {buttonText(connectType)}
            </button>
          ))}
        </>
      )}
      {status === WalletStatus.WALLET_CONNECTED && (
        <button data-disconnected onClick={() => disconnect()}>
          Disconnect
        </button>
      )}
    </div>
  );
};

function buttonText(connectType){
  if(connectType == "WALLETCONNECT"){
    return "Wallet Connect";
  }else if(connectType == "EXTENSION"){
    return "Terra Station";
  }
}
