// src/Nav.tsx
import React from "react";
import { StyledNavLink, UI } from "../styles";


const Nav: React.FC = () => {
  return (
    <nav>
      <UI>
        <li>
          <StyledNavLink
            to="/my"
            style={({ isActive }) => (isActive ? { color: "red" } : {})}
          >
            My
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/items">Items</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/hello">About</StyledNavLink>
        </li>
      </UI>
    </nav>
  );
};

export default Nav;