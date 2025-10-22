import styleTabs from "../style/tabs.module.css";

export const Tabs = () => {
  return (
    <div className={styleTabs.tabs}>
      <ul>
        <li>
          <a href="/" id="list-1">
            Semua Kelas
          </a>
        </li>
        <li>
          <a href="/" id="list-2">
            Pemasaran
          </a>
        </li>
        <li>
          <a href="/" id="list-3">
            Desain
          </a>
        </li>
        <li>
          <a href="/" id="list-4">
            Pengembangan Diri
          </a>
        </li>
        <li>
          <a href="/" id="list-5">
            Bisnis
          </a>
        </li>
      </ul>
    </div>
  );
};
