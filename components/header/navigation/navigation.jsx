import Link from "next/link";

const NAV_LINK = [
  { label: "Freelancer", route: "/" },
  { label: "Contratacion", route: "hiring" },
];

const Navigation = () => {
  return (
    <ul>
      {NAV_LINK.map(({ label, route }) => (
        <li key={route}>
          <Link href={route}>{label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
