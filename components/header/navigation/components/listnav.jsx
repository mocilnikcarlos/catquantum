import style from "./stylenav.module.scss";

const ListNav = ({ children, classname }) => {
  return (
    <nav>
      <ul className={`${style.ul} ${classname}`}>{children}</ul>
    </nav>
  );
};

export default ListNav;
