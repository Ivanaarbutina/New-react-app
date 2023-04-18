import ProfileImg from "./../assets/profile-fave.png";
import VectorLeader from "./../assets/vector-3.png";
import VectorLive from "./../assets/vector-5.png";
import Nike from "./../assets/rectangle-176.png";
import Serena from "./../assets/rectangle-177.png";

const Fave = () => {
  return (
    <div className="fave">
      <nav className="fave__nav">
        <img className="fave__nav__icon" />
        <div>
          <img className="fave__nav__profile-image" src={ProfileImg} />
          <span>jesus_navas</span>
          <span>View Profile</span>
        </div>
        <div>
          <img />
          <span>Dashboard</span>
          <img />
        </div>
        <div>
          <img src={VectorLeader} />
          <span>Leaderboard</span>
          <img />
        </div>
        <div>
          <img />
          <span>Prizes</span>
        </div>
        <img src={VectorLive} />
        <span>Live scores</span>
        <div>
          <img />
          <span>Game rules</span>
        </div>
      </nav>
      <div className="fave__header">
        <span className="fave__header__sec">Prizes overview</span>
        <span className="fave__header__sec2">Rendeem prize</span>
        <img className="fave__header__icon" />
      </div>
    </div>
  );
};

export default Fave;
