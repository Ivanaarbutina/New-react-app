import { useState } from "react";
import { famArt } from "../data/artData";

export type ArtType = {
  name: string;
  lastName: string;
  born: number;
  died: number;
  country: string;
  directionOfArt: string;
  image: string;
  id: number;
  info: string;
  imageName: string;
};

const Vjezba2605 = () => {
  const [activeImage, setActiveImage] = useState<ArtType | null>(null);

  const handleImage = (id: number) => {
    famArt.forEach((art) => {
      if (id === art.id) {
        setActiveImage(art);
      }
    });
  };

  return (
    <div className="art__wrapper">
      <h2>Popularni slikari</h2>
      <div className="art">
        {famArt.map((artist) => {
          return (
            <div key={`${artist.name}-${artist.lastName}`}>
              <img
                className="art__image"
                onClick={() => {
                  handleImage(artist.id);
                }}
                src={artist.image}
                alt={`${artist.name} ${artist.lastName}`}
              />
              <p className="art__name">{`${artist.name} ${artist.lastName}`}</p>
            </div>
          );
        })}
        ;
      </div>
      {activeImage && (
        <div className="art__section">
          <h3>
            {activeImage.name} {activeImage.lastName}
          </h3>
          <p>Born: {activeImage.born}</p>
          <p>Died: {activeImage.died}</p>
          <p>Country: {activeImage.country}</p>
          <p>Direction of Art: {activeImage.directionOfArt}</p>

          <p className="art__title">{activeImage.imageName}</p>
          <div className="art__box">
            <p>{activeImage.info}</p>
            <img src={activeImage.image} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Vjezba2605;
