import { useState } from "react";
import { famArt } from "../data/artData";
import XMark from "../assets/x-mark.svg";

export type ArtType = {
  name: string;
  lastName: string;
  born: number;
  died: number;
  country: string;
  directionOfArt: string;
  profilImage:string;
  image: string;
  id: number;
  info: string;
  imageName: string;
  quote:string;
  galleryImages:string[];
  biografy:string
};

const Artist = () => {
  const [activeImage, setActiveImage] = useState<ArtType | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredQuote, setHoveredQuote] = useState("");
  const [isBiografyVisible, setIsBiografyVisible] = useState(false);
  const [artistBiografy, setArtistBiografy] = useState<ArtType | null>(null);
  const [isActionActive, setIsActionActive] = useState(false);

  const handleImage = (id: number) => {
    famArt.forEach((art) => {
      if (id === art.id) {
        setIsActionActive(true);
        setActiveImage(art);
      }
    });
  };

  const handleHover = (quote: string) => {
    setIsHovered(true);
    setHoveredQuote(quote);

  };

  const handleHoverExit = () => {
    setIsHovered(false);
    setHoveredQuote("");
  }

  const handleClose = () => {
    setActiveImage(null);
    setIsActionActive(false);
    setIsHovered(false);
  };

  const handleBiografy = (id:number) => {
    const selectedArtist = famArt.find((art) => art.id === id); 
      if(selectedArtist) {
        setIsActionActive(true);
        setArtistBiografy(selectedArtist);
        setIsBiografyVisible(true);
      };
  };

  const handleCloseBiografy = () => {
    setIsBiografyVisible(false);
    setArtistBiografy(null);
    setIsActionActive(false);
    setIsHovered(false); // Dodajte ovu liniju za resetiranje handleHover
  };

  return (
    <div className="art__wrapper">
      <h2>Artist</h2>
      <div className="art">
        {famArt.map((artist) => {
           const isCurrentArtistBiografyVisible =
           isBiografyVisible && artistBiografy?.id === artist.id;

          return (
            <div className="art__grid" key={`${artist.name}-${artist.lastName}`}
            onMouseEnter={() => handleHover(artist.quote)}
            onMouseLeave={() => handleHoverExit()}
            >
              <img
                className="art__image"
                src={artist.profilImage}
                alt={`${artist.name} ${artist.lastName}`}
              />
              <p className="art__name">{`${artist.name} ${artist.lastName}`}</p>
              {!isCurrentArtistBiografyVisible && (
                <div
                  className="art__link"
                  onClick={() => handleBiografy(artist.id)}
                >
                   Biography
                </div>
              )}
             <div className="art__link"
              onClick={() => {
                handleImage(artist.id);
              }}
             >Art
             </div>
          </div>
          );
        })}
        ;
      </div>
      {isHovered && !isActionActive && (
        <div className="art__quotes">
          <p className="art__quote">{hoveredQuote}</p>
        </div>
      )}
      {isBiografyVisible && artistBiografy && (
        <div className="biografy__card">
          <h3>
            {artistBiografy.name} {artistBiografy.lastName}
          </h3>
          <div>
            <p className="biografy__text">{artistBiografy.biografy}</p>
          </div>
          <div className="biografy__close"  onClick={handleCloseBiografy}>
            <img src={XMark} alt="close" />
          </div>
        </div>
      )}
  
      {activeImage && (
        <div className="art__section">
            <div className="art__section__box">
              <h3>
                {activeImage.name} {activeImage.lastName}
              </h3>
              <div className="art__section__info">
              <p>Born: {activeImage.born}</p>
              <p>Died: {activeImage.died}</p>
              <p>Country: {activeImage.country}</p>
              <p>Direction of Art: {activeImage.directionOfArt}</p>
              </div>
              <p className="art__section__title">{activeImage.imageName}</p>
              <p className="art__section__descript">{activeImage.info}</p>
            </div> 
            <div className="art__section__gallery">
               {activeImage.galleryImages.map((image) => (
                <img src={image} key={image}/>
               ))}
            </div>
            <div className="art__section__close" onClick={handleClose}>
              <img src={XMark} alt="close"/>
            </div>
          </div>
      )}
    </div>
  );
};

export default Artist;
