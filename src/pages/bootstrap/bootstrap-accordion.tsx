//import { Accordion } from "react-bootstrap";
import { famArt } from "../../data/artData";
import { useState } from "react";

type ArtType = {
  name: string;
  lastName: string;
  born: number;
  died: number;
  country: string;
  directionOfArt: string;
  profilImage: string;
  image: string;
  id: number;
  info: string;
  imageName: string;
  quote: string;
  galleryImages: string[];
  biografy: string;
};

const BootstrapAccordion = () => {
  const [isBiografyVisible, setIsBiografyVisible] = useState(false);
  const [artistBiografy, setArtistBiografy] = useState<ArtType | null>(null);
  return (
    <div>
         <div className="containerbs">
          <h2>Accordion</h2>
              {/* {famArt.map((artist) => {
                isBiografyVisible && artistBiografy?.id === artist.id;
                return ( */}
                  {/* // <Accordion defaultActiveKey={`${artist.name}-${artist.lastName}`}>
                  //   <Accordion.Item eventKey="0">
                  //     <Accordion.Header>{`${artist.name}-${artist.lastName}`}</Accordion.Header>
                  //     <Accordion.Body>
                  //       <div className="art__exe">
                  //         <img */}
                  {/* //           className="art__image"
                  //           src={artist.profilImage}
                  //           alt={`${artist.name} ${artist.lastName}`}
                  //         />
                  //         <span>"{artist.quote}"</span>
                  //       </div>

                  //       <div>{artist.biografy}</div>
                  //     </Accordion.Body> */}
                  {/* //   </Accordion.Item>
                  // </Accordion>
                // */}
            //
            </div>
    </div>
  );
};

export default BootstrapAccordion;