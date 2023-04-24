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
import John from "./../assets/john.png";

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

        <button className="teorem__header__transparent">Sign in</button>
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
        <img className="teorem__section__img2" src={ElipsePic2} />
        <span className="teorem__section__circle2"></span>
        <p className="teorem__section__description">
          Give lessons whenever you want,<br></br>from the comfort your home.
        </p>
        <img className="teorem__section__planer" src={TeoremImg} />
      </div>

      <div className="tutoring">
        <h2 className="tutoring__title">
          Teorem's online tutoring makes<br></br> your life easier
        </h2>
        <p className="tutoring__desc">
          We'll provide you with everyting you need<br></br> to teach online. We
          help you find students<br></br> and manage lessons.
        </p>
        <div className="tutoring__card-wrapper">
          <div className="tutoring__card tutoring__card--1">
            <img className="tutoring__img" src={ComputerDyn} />
            <h3>Fully remote</h3>
            <p className="tutoring__text">All you need laptop and wifi.</p>
          </div>
          <div className="tutoring__card tutoring__card--2">
            <img className="tutoring__img" src={VideoCam} />
            <h3>Tools you need</h3>
            <p className="tutoring__text">Booking system, chat, video calls & more</p>
          </div>
          <div className="tutoring__card tutoring__card--3">
            <img className="tutoring__img" src={MoneyDyn} />
            <h3>Secure Income</h3>
            <p className="tutoring__text">We make sure you get paid.</p>
          </div>
          <div className="tutoring__card tutoring__card--4">
            <img className="tutoring__img" src={Dollar} />
            <h3>Set Your Price</h3>
            <p className="tutoring__text">No limitations what you can earn.</p>
          </div>
          <div className="tutoring__card tutoring__card--5">
            <img className="tutoring__img" src={ChatBubble} />
            <h3>24/7 Support</h3>
            <p className="tutoring__text">We make sure all your issues are solved.</p>
          </div>
          <div className="tutoring__card tutoring__card--6">
            <img className="tutoring__img" src={ChartDin} />
            <h3>Improve Your Teaching</h3>
            <p className="tutoring__text">We take care of administration, you just focus the lessons.</p>
          </div>
        </div>

        <div className="teorem__tutor">
          <p className="teorem__tutor__info">
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ex
            accusantium fuga similique, quisquam quod placeat? Nihil facere
            maiores voluptatibus."
          </p>
          <div>
            <img className="teorem__tutor__pic" src={John} />
            <h4>John Doe</h4>
            <span className="teorem__tutor__name">Tutor</span>
          </div>
        </div>

        
        <div>   
          <h2 className="tutoring__title">
            Set your own price and availability
          </h2>
          <p className="tutoring__desc">
            Use our tool to track how much you're<br></br>
            making and incerase your client base!
          </p>
          <img className="teorem__section__planer" src={TeoremImg} />
          <h2 className="tutoring__title">
            We are here to help you grow!
          </h2>
        </div>
        <div className="teorem__tutor">
          <p className="teorem__tutor__info">
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ex
            accusantium fuga similique, quisquam quod placeat? Nihil facere
            maiores voluptatibus."
          </p>
          <div>
            <img className="teorem__tutor__pic" src={John} />
            <h4>John Doe</h4>
            <span className="teorem__tutor__name">Tutor</span>
          </div>
        
      </div>
      <div>
         <h2 className="tutoring__title">
            How to become an online<br></br> tutor on Teorem
         </h2>
         <div className="tutoring__list">
            <div className="tutoring__list__numb">1</div>
            <span className="tutoring__list__text">Create your acount and fill in the information</span>
         </div>
         <div className="tutoring__list__line"></div>
         <div className="tutoring__list">
            <div className="tutoring__list__numb">2</div>
            <span>Upload a short video to prove your identity</span>
         </div>
         <hr className="tutoring__list__line2"></hr>
         <div className="tutoring__list">
            <div className="tutoring__list__numb">3</div>
            <span>Complete your profile and start tutoring</span>
         </div>
         <button className="tutoring__list__btn">Get started</button>
         <h2 className="tutoring__title">
            Frequently asked quesions
         </h2>
         <div>
            <div><p>What are the requirements for tutors?</p><span></span></div>
            <div><p>How long it takes before I can start teaching?</p><span></span></div>
            <div><p>How does the subscription work?</p><span></span></div>
            <div><p>What does the employment relationship look like?</p></div>
            <div><p>What makes Teorem differenu from other platforms?</p></div>
         </div>
      </div>
       
      </div>
    </div>
  );
};

export default Teorem;
