import React, { useEffect, useState } from 'react';
import { Navbar } from 'reactstrap';
import { NavbarBrand } from 'reactstrap';
import { NavbarToggler } from 'reactstrap';
import { Collapse } from 'reactstrap';
import { Nav } from 'reactstrap';
import { NavItem } from 'reactstrap';
import { NavLink } from 'reactstrap';
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem, NavbarText } from 'reactstrap';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { ConnectType, useWallet, WalletStatus } from '@terra-money/wallet-provider';
import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';
import { ConnectKyuraWallet } from 'components/ConnectKyuraWallet';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export function NavBarSubscribe() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  let history = useHistory();

  getChainOptions().then((chainOptions) => {
    ReactDOM.render(
      <WalletProvider {...chainOptions}>
        <NavBarSubscribe />
      </WalletProvider>,
      document.getElementById('connectdiv'),
    );
  });
  //const { connect } = useWallet()
  //console.log(status);
  //connect(ConnectType.EXTENSION);
  //console.log(connect);

  const handleSubscribeButtonClick = () => {
    //history.push('/subscribe')

  }



  return (
    <div> 
      <Navbar
        color="faded"
        light
        expand = 'md'
       
      >
        <NavbarBrand
          className="ms-auto"
          href="/"
        >
          <img src="images/klogo.png"></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
  
            <NavItem className="ms-auto no-dot-li">
              <Button
                    color="success"
                    onClick={handleSubscribeButtonClick}
                  >
                    Connect
            </Button>
            </NavItem>
        
        </Collapse>

      </Navbar>

    </div>

  );
}


