import React from 'react';
import Twitter from './Images/twitter.png';
import Pinterest from './Images/pinterest.png';

function Header() {
  return (
    <>
      <div>
        <p>Logo</p>
        <p>Iceland</p>
      </div>
      <div>
        <button>Help</button>
        <button>Store Finder</button>
        <img src={Twitter} alt='old twitter logo' />
        <img src={Pinterest} alt='pinterest logo' />
      </div>
    </>
  );
}

export default Header;
