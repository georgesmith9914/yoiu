import { useWallet, WalletStatus } from '@terra-money/wallet-provider';
import React from 'react';
import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';
import ReactDOM from 'react-dom';


export function ConnectKyuraWallet() {

  return (
    <div></div>
  )
  /*try{
    const {
      status,
      network,
      wallets,
      availableConnectTypes,
      availableInstallTypes,
      availableConnections,
      supportFeatures,
      connect,
      install,
      disconnect,
    } = useWallet();

    return (
      <div>
        <h1>Kyura Connect Sample</h1>
        <section>
          <pre>
            {JSON.stringify(
              {
                status,
                network,
                wallets,
                supportFeatures: Array.from(supportFeatures),
                availableConnectTypes,
                availableInstallTypes,
              },
              null,
              2,
            )}
          </pre>
        </section>
  
        <footer>
          {status === WalletStatus.WALLET_NOT_CONNECTED && (
            <>
              {availableInstallTypes.map((connectType) => (
                <button
                  key={'install-' + connectType}
                  onClick={() => install(connectType)}
                >
                  Install {connectType}
                </button>
              ))}
              {availableConnectTypes.map((connectType) => (
                <button
                  key={'connect-' + connectType}
                  onClick={() => connect(connectType)}
                >
                  Connect {connectType}
                </button>
              ))}
              <br />
              {availableConnections.map(
                ({ type, name, icon, identifier = '' }) => (
                  <button
                    key={'connection-' + type + identifier}
                    onClick={() => connect(type, identifier)}
                  >
                    <img
                      src={icon}
                      alt={name}
                      style={{ width: '1em', height: '1em' }}
                    />
                    {name} [{identifier}]
                  </button>
                ),
              )}
            </>
          )}
          {status === WalletStatus.WALLET_CONNECTED && (
            <button onClick={() => disconnect()}>Disconnect</button>
          )}
        </footer>
      </div>
    );
  }finally{

  }*/
}
