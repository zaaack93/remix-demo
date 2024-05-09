import { NavLink } from '@remix-run/react';
import Logo from '../util/Logo';

function MainHeader() {
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/expenses">Expenses</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <ul>
          <li>
            <NavLink to="/auth" className="cta">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
