import logo from "./../assets/new-logo.svg";
import hamburger from "./../assets/icon-hamburger.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div>
          <img className="header__logo" src={logo} alt="Logo" />
        </div>
        <div className="header__actions">
          <nav className="header__nav">
            <a className="header__nav__item" href="/">
              Hooomeee
            </a>
            <a className="header__nav__item" href="/exe">
              Exercises
            </a>
            <a className="header__nav__item" href="/ispit">
              Css ispit
            </a>
            <a className="header__nav__item" href="/mlinar">
              Mlinar
            </a>
            <a className="header__nav__item" href="/teorem">
              Teorem
            </a>
            <a className="header__nav__item" href="/fave">
              Fave
            </a>
            <a className="header__nav__item" href="/varijable">
              Varijable
            </a>
          </nav>
          <div className="header__actions__name">Ivana</div>
        </div>
        <div className="header__hamburger">
          <img src={hamburger} alt="hamburger menu icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
