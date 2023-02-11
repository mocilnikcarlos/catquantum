import Link from "next/link";

const NAV_ITEM = [
  { label: "home", route: "/" },
  { label: "hiring", route: "/hiring" },
];

const Navigation = () => {
  return (
    <ul>
      {NAV_ITEM.map(({ label, route }) => (
        <li key={route}>
          <Link href={route}>{label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
