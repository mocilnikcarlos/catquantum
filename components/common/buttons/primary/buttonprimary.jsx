import style from "../button.module.scss";

const ButtonPrimary = ({ children }) => {
  return <button className={style.buttonprimary}>{children}</button>;
};

export default ButtonPrimary;
