import React from "react";
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import { WalletConnectButton } from "./WalletConnectButton";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter } from '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Home } from 'components/Home';
import { Subscribe } from 'components/Subscribe';
import { Link } from 'react-router-dom';
import './styles.css';
import { TxSample } from "./TxSample";
import { Portfolio2 } from "./Portfolio2";
import { Subscribe2 } from "./Subscribe2";


// A simple example showcasing how easy it is to build
// your own Terra wallet using React-Terra's composable
// building blocks.
// All complex logic related to asynchronicity, race
// conditions, caching, connection states, error handling,
// etc. is abstracted away and hidden behind small,
// declarative APIs.
const App = () => {
  const {
    status,
    wallets,
    availableConnectTypes,
    availableInstallTypes,
    connect,
    install,
    disconnect,
    supportFeatures
  } = useWallet();
  console.log(status);

  return (
  <>      
      <main>      
      <BrowserRouter>
        <Switch>
          <Route path="/portfolio2" >
            <Portfolio2 />
          </Route>

          <Route path="/subscribe2"  exact>
          <div className="container">
                
              
                <section>

                <WalletConnectButton
                    status={status}
                    wallets={wallets}
                    install={install}
                    availableConnectTypes={availableConnectTypes}
                    connect={connect}
                    disconnect={disconnect}
                    availableInstallTypes={availableInstallTypes}
                    WalletStatus={WalletStatus}
                    supportFeatures={supportFeatures}
                />
                {status !== WalletStatus.WALLET_NOT_CONNECTED ? (
                    <div></div>
                ) : (
                    <div></div>
                )}
                </section>
                </div>
          </Route>
          <Route path="/txsample" >
            <TxSample />
          </Route>
          <Route path="/" >
            <Home />
          </Route>

        </Switch>
      </BrowserRouter>
      </main>
    </>
  );
};

export default App;
