import Link from "next/link";
import style from "../button.module.scss";

const ButtonPrimary = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={style.buttonprimary}>
      {children}
    </button>
  );
};

const ButtonPrimaryLink = ({ children, href }) => {
  return (
    <Link href={href} className={style.buttonprimary}>
      {children}
    </Link>
  );
};
export { ButtonPrimary, ButtonPrimaryLink };
