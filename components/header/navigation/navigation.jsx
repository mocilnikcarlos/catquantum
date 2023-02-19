import Link from "next/link";
import style from "@/components/common/buttons/button.module.scss";
import nav from "@/components/header/navigation/nav.module.scss";
import Logoblack from "@/components/svg/logoblack";

const NAV_LINK_LEFT = [
  { label: "freelancer", route: "/" },
  { label: "cat quantum", route: "/#catquantum" },
];

const NAV_LINK_RIGHT = [
  { label: "proyecto", route: "/#project" },
  { label: "contratacion", route: "/hiring" },
];

const Navigation = () => {
  return (
    <ul className={nav.ul}>
      {/* navegacion izquierda */}
      {NAV_LINK_LEFT.map(({ label, route }) => (
        <li key={route}>
          <Link className={style.buttonnav} href={route}>
            {label}
          </Link>
        </li>
      ))}
      {/* logo */}
      <Logoblack clasename={nav.logo} />
      {/* navegacion derecha */}
      {NAV_LINK_RIGHT.map(({ label, route }) => (
        <li key={route}>
          <Link className={style.buttonnav} href={route}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
