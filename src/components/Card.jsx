import styleCard from "../style/card.module.css";
import rating from "../assets/rating.png";

export const Card = ({ imgIconCard, avatar }) => {
  return (
    <div className={styleCard.cardMaster}>
      <div className={styleCard.card}>
        <div className={styleCard.imageCard}>
          <img src={imgIconCard} alt="" />
        </div>
        <div className={styleCard.titleCard}>
          <h3>Big 4 Auditor Financial Analyst</h3>
          <p className={styleCard.deskrip}>
            Mulai transformasi dengan instruktur profesional, harga yang
            terjangkau, dan kurikulum terbaik
          </p>
          <div className={styleCard.avatar}>
            <img src={avatar} alt="avatar" />
            <div className={styleCard.name}>
              <h4>Jenna Ortega</h4>
              <p>Senior Accountant</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styleCard.ratingCard}>
        <div>
          <img src={rating} alt="" className={styleCard.rating} />
        </div>
        <div>
          <h3 className={styleCard.cost}>Rp 300K</h3>
        </div>
      </div>
    </div>
  );
};
