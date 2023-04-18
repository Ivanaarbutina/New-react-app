import TeoremLogo from "./../assets/Teorem-logo.svg";
import Vector from "./../assets/vector-1.png";
import ElipsePic from "./../assets/Ellipse 4.png";
import ElipsePic2 from "./../assets/Ellipse 5.png";

const Teorem = () => {
  return (
    <div className="teorem">
      <div className="teorem__header">
        <img className="teorem__header__icon" src={TeoremLogo} />
        <nav>
          <a className="teorem__header__link">How it works</a>
          <a className="teorem__header__link">Pricing</a>
          <a className="teorem__header__link1">Become a Tutor</a>
        </nav>

        <button className="teorem__header__transparent">
          <span>Sign in</span>
        </button>
        <button className="teorem__header__purple">Try for free</button>

        <div className="teorem__header__box">
          <img className="teorem__header__vector" src={Vector} />
          <span className="teorem__header__lang">EN</span>
        </div>
      </div>

      <div className="teorem__section">
        <span className="teorem__section__circle"></span>
        <img className="teorem__section__img" src={ElipsePic} />
        <h1>
          Start tutoring<br></br>online
        </h1>
        <p>
          Give lessons whenever you want,<br></br>from the comfort your home.
        </p>
      </div>
    </div>
  );
};

export default Teorem;
