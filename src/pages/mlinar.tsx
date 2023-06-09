import HartMlinar from "./../assets/mlinar-hart.svg";
import Path from "./../assets/Path.png";
import GoPlay from "./../assets/google-play-badge.png";
import AppStore from "./../assets/app-store-icon.jpg";
import Mlinar1 from "./../assets/mlinar-1.jpg";
import Mlinar2 from "./../assets/mlinar-2.jpg";
import Mlinar3 from "./../assets/mlinar-3.png";
import Mlinar4 from "./../assets/mlinar-4.png";
import Mlinar5 from "./../assets/mlinar-5.png";
import Mlinar6 from "./../assets/mlinar-6.png";
import Mlinar7 from "./../assets/mlinar-7.png";
import Mlinar8 from "./../assets/mlinar-8.png";
import Mlinar9 from "./../assets/mlinar-9.png";
import Mlinar10 from "./../assets/mlinar-10.png";
import Mlinar11 from "./../assets/mlinar-11.png";
import Mlinar12 from "./../assets/mlinar-12.png";
import Mlinar13 from "./../assets/mlinar-13.png";
import Bitmap from "./../assets/Bitmap.png";
import Kosher from "./../assets/kosher.png";
import KoserDairy from "./../assets/kosher_dairy.png";
import Superbrands from "./../assets/superbrands_2012.png";
import Superbrands2 from "./../assets/superbrands_2016-2017.png";
import Halal from "./../assets/halal.png";
import Bitmap2 from "./../assets/Bitmap (1).png";
import Ifs from "./../assets/ifs.png";

const Mlinar = () => {
  return (
    <div className="container__mlinar">
      <div className="mlinar">
        <div className="mlinar__header">
          <div className="mlinar__header__first">
              <span >
                <img src={HartMlinar}/>
              </span>
              <nav className="mlinar__nav">
                <a href="">Proizvodi</a>
                <a href="">Lokacije</a>
                <a href="">Karijere</a>
                <a href="">Naša priča</a>
                <a href="">Kontakt</a>
              </nav>
          </div>
          <span>EN</span>
        </div>

        <div className="ml-hero"></div>
        <h1 className="ml-hero__title">
          <span className="ml-hero__title ml-hero__title--yellow">Najukusniji</span> pekarski<br></br> proizvodi u susjedstvu.
        </h1>
        <nav className="ml-hero__nav">
          <button className="ml-hero__nav__btn"><a href="">Kruh</a></button>
          <button className="ml-hero__nav__btn"><a href="">Peciva</a></button>
          <button className="ml-hero__nav__btn"><a href="">Slano</a></button>
          <button className="ml-hero__nav__btn"><a href="">Slatko</a></button>
          <button className="ml-hero__nav__btn"><a href="">Burek</a></button>
          <button className="ml-hero__nav__btn"><a href="">Pizza</a></button>
          <button className="ml-hero__nav__btn"><a href="">Sendviči</a></button>
          <button className="ml-hero__nav__btn"><a href="">Salata</a></button>
          <button className="ml-hero__nav__btn"><a href="">HoreCa</a></button>
          <button className="ml-hero__nav__btn"><a href="">Pakirano</a></button>
          <button className="ml-hero__nav__btn"><a href="">Kolači</a></button> 
       </nav>
       <nav className="ml-hero__nav ml-hero__nav2" >
          <button className="ml-hero__nav__btn"><a href="">Torte</a></button>
          <button className="ml-hero__nav__btn"><a href="">Prigodne torte</a></button>
       </nav> 
      </div>

      <div className="mlinar__main-section">
        <div className="mlinar__section">
          <div>
              <img className="mlinar__img" src={Mlinar1} />
              <h4>KRUH</h4>
              <span>Kruhovi ravno iz peći</span>
          </div>
          <div>
              <img className="mlinar__img" src={Mlinar2} />
              <h4>PECIVA</h4>
              <span>Tradicionalna,ukusna i jednostavna</span>
          </div>
          <div>
              <img className="mlinar__img" src={Mlinar3} />
              <span className="mlinar__img__item">Slano</span>
              <span className="mlinar__img__item2">
                <img className="mlinar__img__path" src={Path}/>
              </span>
              <h4>SLANO</h4>
              <span>Neodoljivi slani zalogaji</span>
          </div>
        </div>

        <div className="mlinar__section">
          <div>
            <img className="mlinar__img" src={Mlinar4} />
            <h4>SLATKO</h4>
            <span>Najslađe od finih peciva</span>
          </div>
          <div>
            <img className="mlinar__img" src={Mlinar5} />
            <h4>BUREK</h4>
            <span>Sočni okusi tradicije</span>
          </div>
          <div>
            <img className="mlinar__img" src={Mlinar6} />
            <h4>PIZZA</h4>
            <span>Svježe, bogate i slasne</span>
          </div>
        </div>

        <div className="mlinar__section">
          <div>
            <img className="mlinar__img" src={Mlinar7} />
            <h4>SENDVIČI</h4>
            <span>Bogati i neodoljivi</span>
          </div>
          <div>
            <img className="mlinar__img" src={Mlinar8} />
            <h4>SALATA</h4>
            <span>Zdrav obrok u žurbi</span>
          </div>
          <div>
            <img className="mlinar__img" src={Mlinar9} />
            <h4>HoReCa</h4>
            <span>Prednost vašeg poslovanja</span>
          </div>
          <div>
            <img className="mlinar__img" src={Mlinar10} />
            <h4>PAKIRANO</h4>
            <span>Dugotrajni i puni okusa</span>
          </div>
        </div>

        <div className="mlinar__section">
          <div>
            <img className="mlinar__img" src={Mlinar11} />
            <h4>KOLAČI</h4>
            <span>Bogati okusom</span>
          </div>
          <div>
            <img className="mlinar__img" src={Mlinar12} />
            <h4>TORTE</h4>
            <span>Kraljevski ukusne slastice</span>
          </div>
          <div>
            <img className="mlinar__img" src={Mlinar13} />
            <h4>PRIGODNE TORTE</h4>
            <span>Torte za sve prigode</span>
          </div>
        </div>
      </div>

      <div className="mlinar__info">
        <div className="mlinar__info__box">
            <div className="mlinar__info__box1">
              <h5>MLINAR</h5>
              <p>MLINAR pekarska industrija</p>
              <p>Radnička cesta 228c</p>
              <p>10000 Zagreb,Hrvatska</p>
            </div>
            <div>
              <h5>KONTAKT</h5>
              <p>T:+385 1 23 82 300</p>
              <p>F:+385 1 23 82 303</p>
              <p>Email:info@mlinar.eu.com</p>
            </div>
        </div>
      
        <div className="mlinar__info__box3">
          <div>
            <a href="">Proizvodi</a>
            <a href="">Lokacije</a>
            <a href="">Karijere</a>
            <a href="">Naša priča</a>
            <a href="">Kontakt</a>
          </div>
          <div className="mlinar__info__app">
            <img className="mlinar__info__pic"src={GoPlay}/>
            <img className="mlinar__info__pic2" src={AppStore}/>
          </div>
          <span className="mlinar__info__copy">&copy; MLINAR pekarska industrija d.o.o.| Made by: Reroot </span>
        </div>
      </div>

      <div className="mlinar__footer">
        <div className="mlinar__footer__first">
          <img src={Bitmap}/>
          <img src={Kosher}/>
          <img src={KoserDairy}/>
          <img src={Superbrands}/>
          <img src={Halal}/>
          <img src={Superbrands2}/>
          <img src={Bitmap2}/>
          <img src={Ifs}/>
        </div>
        <div className="mlinar__footer__last">
          <a href="">Sitemap</a>
          <a href="">Dokumenti</a>
          <a href="">Pravila privatnosti</a>
        </div>
      </div>
    </div>
  );
};
export default Mlinar;
