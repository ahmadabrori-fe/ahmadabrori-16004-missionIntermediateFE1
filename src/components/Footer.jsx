import styleFooter from "../style/footer.module.css";
import logoVideoBelajar from "../assets/videobelajar-logo.png";
import imgKeyboardArrowRight from "../assets/KeyboardArrowRight.png";
import iconDivider from "../assets/Divider.png";
import linkedin from "../assets/linkedin.png";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import twitter from "../assets/twitter.png";

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
              <a href="/">Kategori</a>
              <img src={imgKeyboardArrowRight} alt="" />
              <div className={styleFooter.kategori}>
                <a href="/">Digital & Teknologi</a>
                <a href="/">Pemasaran</a>
                <a href="/">Manajemen Bisnis</a>
                <a href="/">Pengembangan Diri</a>
                <a href="/">Desain</a>
              </div>
            </div>
            <div className={styleFooter.product}>
              <a href="/">Perusahaan</a>
              <img src={imgKeyboardArrowRight} alt="" />
              <div className={styleFooter.kategori}>
                <a href="/">Tentang Kami</a>
                <a href="/">FAQ</a>
                <a href="/">Kebijakan Privasi</a>
                <a href="/">ketentuan Layanan</a>
                <a href="/">Bantuan</a>
              </div>
            </div>
            <div className={styleFooter.product}>
              <a href="/">Komunitas</a>
              <img src={imgKeyboardArrowRight} alt="" />
              <div className={styleFooter.kategori}>
                <a href="/">Tips Sukses</a>
                <a href="/">Blog</a>
                <span className={styleFooter.blogHidden}>
                  <a href="/" id="blog-3">
                    Blog
                  </a>
                  <a href="/" id="blog-4">
                    Blog
                  </a>
                  <a href="/" id="blog-5 ">
                    Blog
                  </a>
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
