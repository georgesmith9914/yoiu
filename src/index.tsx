import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from 'components/Home';
import { Subscribe } from 'components/Subscribe';
import { Link } from 'react-router-dom';
import App from "components/App";
import '@fortawesome/fontawesome-free/css/all.min.css';





getChainOptions().then((chainOptions) =>
  ReactDOM.render (
    <WalletProvider {...chainOptions}>
      <App />
    </WalletProvider>,
    document.getElementById("root")
  )
);

{/* 
function App() {
  return (
    <main
      
    >
      <BrowserRouter>
        <Switch>
          <Route path="/subscribe"  exact>
            <Subscribe />
          </Route>
          <Route path="/" >
            <Home />
          </Route>

        </Switch>
      </BrowserRouter>
    </main>
  );
}

ReactDOM.render(
    <App />,
   document.getElementById('root'),
);

export default App;
*/}
