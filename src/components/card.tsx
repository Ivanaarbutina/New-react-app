import CardImg from "./../assets/summer.jpg";

type CardProps = {
  title: string;
  discription: string;
};

const Card = ({ title, discription }: CardProps) => {
  return (
    <div className="card">
      <img className="card__image" src={CardImg} alt="summer" />
      <h3 className="card__title">{title}</h3>
      <p className="card__message">{discription}</p>
      <div className="card__bottom">
        <button className="card__btn">Ok</button>
        <button className="card__btn2">Cancell</button>
      </div>
    </div>
  );
};

export default Card;
