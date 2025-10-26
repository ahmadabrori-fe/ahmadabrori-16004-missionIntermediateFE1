import styleFooter from "../style/footer.module.css";
import logoVideoBelajar from "../assets/videobelajar-logo.png";
import imgKeyboardArrowRight from "../assets/KeyboardArrowRight.png";
import iconDivider from "../assets/Divider.png";
import linkedin from "../assets/linkedin.png";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import twitter from "../assets/twitter.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={styleFooter.footer}>
      <section className={styleFooter.footerBox}>
        <div className={styleFooter.footerDesc}>
          <div className={styleFooter.desc1}>
            <img src={logoVideoBelajar} alt="" />
            <h3>
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </h3>
            <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p>+62-877-7123-1234</p>
          </div>
          <div className={styleFooter.desc2}>
            <div className={styleFooter.product}>
              <Link to="/">Kategori</Link>
              <img src={imgKeyboardArrowRight} alt="" />
              <div className={styleFooter.kategori}>
                <Link to="/">Digital & Teknologi</Link>
                <Link to="/">Pemasaran</Link>
                <Link to="/">Manajemen Bisnis</Link>
                <Link to="/">Pengembangan Diri</Link>
                <Link to="/">Desain</Link>
              </div>
            </div>
            <div className={styleFooter.product}>
              <Link to="/">Perusahaan</Link>
              <img src={imgKeyboardArrowRight} alt="" />
              <div className={styleFooter.kategori}>
                <Link to="/">Tentang Kami</Link>
                <Link to="/">FAQ</Link>
                <Link to="/">Kebijakan Privasi</Link>
                <Link to="/">ketentuan Layanan</Link>
                <Link to="/">Bantuan</Link>
              </div>
            </div>
            <div className={styleFooter.product}>
              <Link to="/">Komunitas</Link>
              <img src={imgKeyboardArrowRight} alt="" />
              <div className={styleFooter.kategori}>
                <Link to="/">Tips Sukses</Link>
                <Link to="/">Blog</Link>
                <span className={styleFooter.blogHidden}>
                  <Link to="/" id="blog-3">
                    Blog
                  </Link>
                  <Link to="/" id="blog-4">
                    Blog
                  </Link>
                  <Link to="/" id="blog-5 ">
                    Blog
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styleFooter.lineBottom}>
          <img src={iconDivider} alt="" />
        </div>
        <div className={styleFooter.sosmed}>
          <div className={styleFooter.sosmedItem}>
            <img src={linkedin} alt="" />
            <img src={fb} alt="" />
            <img src={ig} alt="" />
            <img src={twitter} alt="" />
          </div>
          <p>@2023 Ahmad Abrori All Rights Reserved.</p>
        </div>
      </section>
    </footer>
  );
};
