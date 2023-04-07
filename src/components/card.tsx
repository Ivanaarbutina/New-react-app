import CardImg from "./../assets/card-img.jpg";
type CardProps = {
  title: string;
  discription: string;
};

const Card = ({ title, discription }: CardProps) => {
  return (
    <div className="card">
      <img className="card__image" src={CardImg} alt="card-image" />
      <h3 className="card__title">{title}</h3>
      <p className="card__message">{discription}</p>
      <div>
        <button className="card__btn">Ok</button>
        <button className="card__btn2">Cancel</button>
      </div>
    </div>
  );
};

export default Card;
