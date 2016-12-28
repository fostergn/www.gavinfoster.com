import React from 'react';
import classNames from 'classnames';

const Header = ({ toggleSetting }) =>  {

  const navClass = classNames({
    'header__nav': true,
    'header__nav--hidden': false
  });

  const navigateHome = (e) => {
    e.preventDefault();
    console.log('click');
  }

  return (
    <div className="header">
      <div className="header__nav">
          <ul className={navClass}>
            <li>Gavin Foster</li>
          </ul>
      </div>
  </div>
  );
}

export default Header;
