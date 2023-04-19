import TeoremLogo from "./../assets/Teorem-logo.svg";
import Vector from "./../assets/vector-1.png";
import ElipsePic from "./../assets/Ellipse 4.png";
import ElipsePic2 from "./../assets/Ellipse 5.png";
import TeoremImg from "./../assets/teorem-img.png";
import VideoCam from "./../assets/video-camera.png";
import ComputerDyn from "./../assets/computer-dynamic.png";
import MoneyDyn from "./../assets/money-dynamic.png";
import ChartDin from "./../assets/chart-dynamic.png";
import ChatBubble from "./../assets/chat-bubble.png";
import Dollar from "./../assets/dollar.png";

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
          Sign in
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
        <img className="teorem__section__img2" src={ElipsePic2}/>
        <span className="teorem__section__circle2"></span>
        <p className="teorem__section__description">
          Give lessons whenever you want,<br></br>from the comfort your home.
        </p>
        <img  className="teorem__section__planer" src={TeoremImg}/>
        
      </div>

      <div className="tutoring">
        <h2 className="tutoring__title">Teorem's online tutoring makes<br></br> your life easier</h2>
        <p className="tutoring__desc">We'll provide you with everyting you need<br></br> to teach online.
          We help you find students<br></br> and manage lessons.
        </p>
        <div className="tutoring__card-wrapper">
          <div className="tutoring__card tutoring__card--1">
            <img src={ComputerDyn}/>
            <h3>Fully remote</h3>
            <p>All you need laptop and wifi.</p>
          </div>
          <div className="tutoring__card tutoring__card--2">
            <img src={VideoCam}/>
            <h3>Tools you need</h3>
            <p>Booking system, chat, video calls & more</p>
          </div>
          <div className="tutoring__card tutoring__card--3">
            <img src={MoneyDyn}/>
            <h3>Secure Income</h3>
            <p>We make sure you get paid.</p>
          </div>
          <div className="tutoring__card tutoring__card--4">
            <img src={Dollar}/>
            <h3>Set Your Price</h3>
            <p>No limitations what you can earn.</p>
          </div>
          <div className="tutoring__card tutoring__card--5">
            <img src={ChatBubble}/>
            <h3>24/7 Support</h3>
            <p>We make sure all your issues are solved.</p>
          </div>
          <div className="tutoring__card tutoring__card--6">
            <img src={ChartDin}/>
            <h3>Improve Your Teaching</h3>
            <p>We take care of administration, you just focus the lessons.</p>
          </div>
        </div>
      
        </div>
    </div>
  );
};

export default Teorem;
