import "./header.css";
import Links from "../links/Links";
import Logo from "../logo/Logo";

export function Header() {
  return (
    <>
      <header className="header">
        <Logo />
        <Links />
      </header>
    </>
  );
}
