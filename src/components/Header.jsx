import logo from "../assets/videobelajar-logo.png";
import styleHeader from "../style/header.module.css";

export const Header = ({ hamburger }) => {
  return (
    <header className={styleHeader.header}>
      <img className={styleHeader.logo} src={logo} alt="logo" />
      {hamburger ? (
        <img
          src={hamburger}
          alt="humburgerIcon"
          className={styleHeader.hamburgerIcon}
        />
      ) : null}
    </header>
  );
};
