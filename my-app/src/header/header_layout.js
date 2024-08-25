import React from 'react';
import Navi from './navigation_bar/navigation_bar';
import Static_Navi from './navigation_bar/static_navigation_bar';

function Header() {
  return (
    <div className="header-container">
      <Navi />
      <Static_Navi/>
    </div>
  );
}

export default Header;
