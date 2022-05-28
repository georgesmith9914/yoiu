import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';
import { NavBar } from 'components/NavBar';
import { MainSection } from 'components/MainSection';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {NavBarSubscribe} from 'components/NavBarSubscribe';
import '../style.css';

export function Subscribe() {
  return (
    <div
      
    >
      <NavBarSubscribe />
   
    </div>
  );
}