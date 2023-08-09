import React from 'react';
import Twitter from './Images/twitter.png';
import Pinterest from './Images/pinterest.png';
import { Button } from 'react-bootstrap';

function Header() {
  return (
    <>
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
    </>
  );
}

export default Header;
