import Mlinar1 from "./../assets/mlinar-1.jpg";
import Mlinar2 from "./../assets/mlinar-2.jpg";
import Mlinar3 from "./../assets/mlinar-3.jpg";

const Mlinar = () => {
  return (
    <div className="container">
      <div className="mlinar">
        <div className="mlinar__header">
          <span></span>
          <nav>
            <a href="">Proizvodi</a>
            <a href="">Lokacije</a>
            <a href="">Karijere</a>
            <a href="">Naša priča</a>
            <a href="">Kontakt</a>
          </nav>
          <span>E</span>
        </div>
        <div className="mlinar__hero"></div>
        <h1>Najukusniji pekarski proizvodi u susjedstvu</h1>
        <nav>
          <a href="">Kruh</a>
          <a href="">Peciva</a>
          <a href="">Slano</a>
          <a href="">Slatko</a>
          <a href="">Burek</a>
          <a href="">Pizza</a>
          <a href="">Sendviči</a>
          <a href="">Salata</a>
          <a href="">HoReCa</a>
          <a href="">Pakirano</a>
          <a href="">Kolači</a>
          <a href="">Torte</a>
          <a href="">Prigodne torte</a>
        </nav>
      </div>
      <div>
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
          <span></span>
        </div>
      </div>
    </div>
  );
};
export default Mlinar;
