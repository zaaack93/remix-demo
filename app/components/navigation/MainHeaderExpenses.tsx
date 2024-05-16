import { NavLink } from '@remix-run/react';
import Logo from '../util/Logo';

function MainHeaderExpenses() {
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/expenses/analysis">Analyse Expenses</NavLink>
          </li>
          <li>
            <NavLink to="/expenses">Manage Expenses</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <ul>
          <li>
            <NavLink to="/auth" className="cta">Logout</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeaderExpenses;
