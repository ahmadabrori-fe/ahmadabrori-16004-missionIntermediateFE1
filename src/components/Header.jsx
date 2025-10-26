import { Link } from "react-router-dom";
import logo from "../assets/videobelajar-logo.png";
import styleHeader from "../style/header.module.css";

export const Header = ({ profileIcon, order }) => {
  return (
    <header className={styleHeader.header}>
      <img className={styleHeader.logo} src={logo} alt="logo" />
      <div className={styleHeader.boxRight}>
        <Link className={styleHeader.order}>{order}</Link>
        {profileIcon ? (
          <img
            src={profileIcon}
            alt="profileIcon"
            className={styleHeader.profileIcon}
          />
        ) : null}
      </div>
    </header>
  );
};
