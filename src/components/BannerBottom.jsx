import styleBannerBottom from "../style/bannerBottom.module.css";
import imgBannerBottom from "../assets/banner-bottom.jpg";
import clsx from "clsx";

export const BannerBottom = () => {
  return (
    <section className={styleBannerBottom.bannerBtm}>
      <div className={styleBannerBottom.bannerBottom}>
        <img src={imgBannerBottom} alt="banner-bottom" />
      </div>
      <div className={styleBannerBottom.opacityBottom}>
        <div className={styleBannerBottom.letter}>
          <div className={styleBannerBottom.newsletter}>
            <p className={styleBannerBottom.news}>NEWSLETTER</p>
            <h2 className={styleBannerBottom.learn}>
              Mau Belajar Lebih Banyak?
            </h2>
            <p className={styleBannerBottom.regis}>
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik harisenin.com
            </p>
          </div>
          <div className={styleBannerBottom.buttonLet}>
            <button
              type="button"
              className={clsx(
                styleBannerBottom.buttonLetter,
                styleBannerBottom.btn1
              )}
            >
              Masukkan Emailmu
            </button>
            <button
              type="button"
              className={clsx(
                styleBannerBottom.buttonLetter,
                styleBannerBottom.btn2
              )}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
