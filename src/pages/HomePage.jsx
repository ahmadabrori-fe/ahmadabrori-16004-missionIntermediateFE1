import "../style/home.css";
import { useEffect } from "react";
import { Header } from "../components/Header";
import { BannerTop } from "../components/Banner";
import { TitleCard } from "../components/TitleCard";
import { Tabs } from "../components/Tabs";
import { Card } from "../components/Card";
import { BannerBottom } from "../components/BannerBottom";
import { Footer } from "../components/Footer";
import hamburgerIcon from "../assets/hamburgerIcon.png";
import imageCard1 from "../assets/image-card-1.jpg";
import imageCard2 from "../assets/image-card-2.jpg";
import imageCard3 from "../assets/image-card-3.jpg";
import imageCard4 from "../assets/image-card-4.jpg";
import imageCard5 from "../assets/image-card-5.jpg";
import imageCard6 from "../assets/image-card-6.jpg";
import imageCard7 from "../assets/image-card-7.jpg";
import imageCard8 from "../assets/image-card-8.jpg";
import imageCard9 from "../assets/image-card-9.jpg";
import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import avatar5 from "../assets/avatar-5.png";
import avatar6 from "../assets/avatar-6.png";
import avatar7 from "../assets/avatar-7.png";
import avatar8 from "../assets/avatar-8.png";
import avatar9 from "../assets/avatar-9.png";

export const Home = () => {
  useEffect(() => {
    document.title = "Home | videobelajar";
  });

  return (
    <>
      <Header hamburger={hamburgerIcon} />
      <main className="main">
        {/* <!-- section banner top --> */}
        <BannerTop />
        {/* <!-- section title --> */}
        <div className="box-card">
          <TitleCard />
          <Tabs />
          {/* <!-- section card --> */}
          <section className="box-master-card">
            <Card imgIconCard={imageCard1} avatar={avatar1} />
            <Card imgIconCard={imageCard2} avatar={avatar2} />
            <Card imgIconCard={imageCard3} avatar={avatar3} />
            <Card imgIconCard={imageCard4} avatar={avatar4} />
            <Card imgIconCard={imageCard5} avatar={avatar5} />
            <Card imgIconCard={imageCard6} avatar={avatar6} />
            <Card imgIconCard={imageCard7} avatar={avatar7} />
            <Card imgIconCard={imageCard8} avatar={avatar8} />
            <Card imgIconCard={imageCard9} avatar={avatar9} />
          </section>
        </div>
        {/* <!-- section banner buttom --> */}
        <BannerBottom />
      </main>
      {/* <!-- section footer --> */}
      <Footer />
    </>
  );
};
