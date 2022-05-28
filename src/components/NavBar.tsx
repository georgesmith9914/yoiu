import React, { useEffect, useState } from 'react';
import { Navbar } from 'reactstrap';
import { NavbarBrand } from 'reactstrap';
import { NavbarToggler } from 'reactstrap';
import { Collapse, Container } from 'reactstrap';
import { Nav } from 'reactstrap';
import { NavItem } from 'reactstrap';
import { NavLink } from 'reactstrap';
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem, NavbarText } from 'reactstrap';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BulletList } from 'react-content-loader';

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  let history = useHistory();

  const handleSubscribeButtonClick = () => {
    history.push('/subscribe2')
  }
  
  return (  
    <Container className='gutters'>
      <Navbar
        expand = 'xs'
        className='navstyle'
      >
       <NavbarBrand className='navbrand'>
         <a href="#">
          <img className='logo-img' src='images/apple-touch-icon.png'/> 
          <p className="iname">YOIU</p>        
         </a>
       </NavbarBrand>        
      
      
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>  
           <NavItem className="ms-auto">
              <Button
                    className="btn-lg btn-deco px-5"
                    onClick={handleSubscribeButtonClick}
                  >
                    Connect
            </Button>
            </NavItem>        
        </Collapse>
      </Navbar>  
   </Container>
  );
  
}
