import { NavLink } from "@remix-run/react";

function Logo() {
  return (
    <h1 id="logo">
      <NavLink to="/" aria-label="RemixExpenses">RemixExpenses</NavLink>
    </h1>
  );
}

export default Logo;
