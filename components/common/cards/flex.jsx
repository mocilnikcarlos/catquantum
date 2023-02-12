import style from "./flex.module.scss";

const Flex = ({ children, className }) => {
  return <div className={`${style.cardflex} ${className}`}>{children}</div>;
};

export default Flex;
