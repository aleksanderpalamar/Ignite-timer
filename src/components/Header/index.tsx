import { Scroll, Timer } from "phosphor-react";
import { HeaderContainer } from "./styles";

import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logo}
        alt="Torre Eiffel"
        title="Logomarca Paris Móveis Planejados"
      />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/historico" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
