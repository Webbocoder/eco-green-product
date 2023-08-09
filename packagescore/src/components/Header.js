import React from 'react';
import Twitter from './Images/twitter.png';
import Pinterest from './Images/pinterest.png';
import {Container, Navbar} from 'react-bootstrap'

const Header = () => {
  return (
    <header className="py-3 border-bottom">
      <Navbar>
        <Container className="d-flex justify-content-center">
          <Navbar.Brand href="#home">
            <img src="https://about.iceland.co.uk/wp-content/uploads/2017/11/logo-1.png" className="d-inline-block align-top" width={100}/>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
