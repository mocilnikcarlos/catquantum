"use client";
import Navigation from "./navigation/navigation";
import { ButtonPrimaryLink } from "../common/buttons/primary/buttonprimary";
import ButtonNav from "./navigation/components/buttonnav";
import ListNav from "./navigation/components/listnav";

import Behance from "../svg/behance";
import Whatsapp from "../svg/whatsapp";

import style from "@/components/header/header.module.scss";
import button from "@/components/common/buttons/button.module.scss";

// Hook scroll header
import colorChange from "@/components/hooks/useScroll";

const Header = () => {
  const headerIsActive = colorChange();

  return (
    <header className={`${style.header} ${headerIsActive ? style.active : ""}`}>
      <ListNav>
        <li>
          <ButtonNav href={"/#"} className={button.buttonnavicon}>
            <Whatsapp />
          </ButtonNav>
        </li>
        <li>
          <ButtonNav href={"/#"} className={button.buttonnavicon}>
            <Behance />
          </ButtonNav>
        </li>
      </ListNav>
      <Navigation />
      <ButtonPrimaryLink href={"/contacto"}>contacto</ButtonPrimaryLink>
    </header>
  );
};

export default Header;
