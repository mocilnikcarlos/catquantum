import Logoblack from "@/components/svg/logoblack";
import ButtonNav from "./components/buttonnav";
import ListNav from "./components/listnav";

import logo from "@/components/header/navigation/logo.module.scss";
import style from "@/components/common/buttons/button.module.scss";

const NAV_LINK_LEFT = [
  {
    route: "/",
    label: "freelancer",
  },
  {
    route: "/#catquantum",
    label: "cat quantum",
  },
];

const NAV_LINK_RIGHT = [
  {
    route: "/#projects",
    label: "proyectos",
  },
  {
    route: "/hiring",
    label: "contratación",
  },
];

const Navigation = () => {
  return (
    <ListNav>
      {NAV_LINK_LEFT.map(({ route, label }) => (
        <li key={route}>
          <ButtonNav href={route} className={style.buttonnavtext}>
            {label}
          </ButtonNav>
        </li>
      ))}
      <Logoblack clasename={logo.logo} />
      {NAV_LINK_RIGHT.map(({ route, label }) => (
        <li key={route}>
          <ButtonNav href={route} className={style.buttonnavtext}>
            {label}
          </ButtonNav>
        </li>
      ))}
    </ListNav>
  );
};

export default Navigation;
