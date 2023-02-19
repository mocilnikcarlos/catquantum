import Link from "next/link";

const ButtonNav = ({ href, className, children }) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default ButtonNav;
