import React from 'react';
import classNames from 'classnames';

const Header = () =>  {

  const navClass = classNames({
    'header__nav': true,
    'header__nav--hidden': false
  });

  const navigateHome = (e) => {
    e.preventDefault();
    console.log('click');
  }

  return (
    <header className="header">
      <h1 className="header__title">Gavin Foster</h1>
    </header>
  );
}

export default Header;
