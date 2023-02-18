import Navigation from "./navigation/navigation";
import style from "@/components/header/header.module.scss";
import nav from "@/components/header/navigation/nav.module.scss";
import ButtonPrimary from "../common/buttons/primary/buttonprimary";

const Header = () => {
  return (
    <header className={style.header}>
      <h1>REDES</h1>
      <nav className={nav.nav}>
        <Navigation />
      </nav>
      <ButtonPrimary>contacto</ButtonPrimary>
    </header>
  );
};

export default Header;
