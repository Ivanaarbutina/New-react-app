import LionImg from "./../assets/premier-league-lion.png";

const GridCard = () => {
  return (
    <div className="card">
      <div className="card__header">
        <img className="card__img" src={LionImg} alt="Lion-king" />
        <div className="card__header__title">
          <h4>GAMEWEEK 17</h4>
          <span>Premier League</span>
        </div>
      </div>
      <div className="card__hero">
        <div className="card__hero__first">
          <span>Winning prize</span>
          <span>
            <b>Signed BVB Jersey</b>{" "}
          </span>
        </div>
        <span className="card__circle">
          <span>
            14<br></br> Days
          </span>
        </span>
      </div>
      <hr></hr>
      <div className="card__footer">
        <div className="card__footer__section">
          <span className="card__footer__first">Game points</span>
          <span>
            <b>1000</b>
          </span>
        </div>
        <div className="card__footer__section">
          <span className="card__footer__first">Game entries</span>
          <span>
            <b>1452</b>
          </span>
        </div>
        <div className="card__footer__section">
          <span className="card__footer__first">Reminder</span>
          <label className="switch">
            <input type="checkbox" checked />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
