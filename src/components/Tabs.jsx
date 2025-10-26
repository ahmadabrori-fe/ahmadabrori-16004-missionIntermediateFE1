import { Link } from "react-router-dom";
import styleTabs from "../style/tabs.module.css";

export const Tabs = () => {
  return (
    <div className={styleTabs.tabs}>
      <ul>
        <li>
          <Link to="/" id="list-1">
            Semua Kelas
          </Link>
        </li>
        <li>
          <Link to="/" id="list-2">
            Pemasaran
          </Link>
        </li>
        <li>
          <Link to="/" id="list-3">
            Desain
          </Link>
        </li>
        <li>
          <Link to="/" id="list-4">
            Pengembangan Diri
          </Link>
        </li>
        <li>
          <Link to="/" id="list-5">
            Bisnis
          </Link>
        </li>
      </ul>
    </div>
  );
};
