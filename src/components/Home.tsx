import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';
import { NavBar } from 'components/NavBar';
import { MainSection } from 'components/MainSection';
import { CenterCard } from 'components/CenterCard';
import { SecondMainSection } from 'components/SecondMainSection';
import { Asection } from 'components/Asection';
import { Footer } from 'components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles.css';


export function Home() {
  return (
    <main>      {/* Put navbar here */}
      <NavBar />
      <MainSection /> 
      <CenterCard />    
      <SecondMainSection />       
      <Asection />   
      <Footer />

    </main>
  );
}


