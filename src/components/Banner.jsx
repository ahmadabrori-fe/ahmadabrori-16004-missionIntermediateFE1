import styleBannerTop from "../style/bannerTop.module.css";
import imageBannerTop from "../assets/imageBannerTop.jpg";
import { ButtonInHome } from "./ButtonInHome";

export const BannerTop = () => {
  return (
    <>
      <div className={styleBannerTop.imageBannerTop}>
        <img src={imageBannerTop} alt="bannerTop" />
      </div>
      <div className={styleBannerTop.boxOpacity}>
        <div className={styleBannerTop.textBanner}>
          <h1>
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>
          <p>
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
        </div>
        <div>
          <ButtonInHome text="Temukan Video Course untuk di pelajari!" />
        </div>
      </div>
    </>
  );
};
