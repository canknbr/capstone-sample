import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../routes/navigation.styles.scss';
import { ReactComponent as CrownLogo } from '../assets/svg/crown.svg';
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
