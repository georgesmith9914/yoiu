import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';
import { MainSection } from 'components/MainSection';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {NavBarSubscribe} from 'components/NavBarSubscribe';
import '../style.css';
import { NavBar } from 'components/NavBar';
import { Portfolio2 } from './Portfolio2';

export function Subscribe2() {
  return (
    <main
      
    >
      {/* Put navbar here */}
      <NavBar />
      <Portfolio2 />

    </main>
  );
}