import React from 'react';
import Twitter from './Images/twitter.png';
import Pinterest from './Images/pinterest.png';
import { Button } from 'react-bootstrap';

function Header() {
  return (
    <header className="py-3 mb-3 border-bottom">
      <div>
        <p>Logo</p>
        <p>Iceland</p>
      </div>
      <div>
        <Button variant='light'>Help</Button>
        <Button variant='light'>Store Finder</Button>
        <img src={Twitter} alt='old twitter logo' />
        <img src={Pinterest} alt='pinterest logo' />
      </div>
    </header>
  );
}

export default Header;
