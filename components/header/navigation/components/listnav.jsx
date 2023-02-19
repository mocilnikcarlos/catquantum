import style from "./stylenav.module.scss";

const ListNav = ({ children }) => {
  return (
    <nav>
      <ul className={style.ul}>{children}</ul>
    </nav>
  );
};

export default ListNav;
