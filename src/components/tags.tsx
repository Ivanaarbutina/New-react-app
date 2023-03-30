import sadeFace from "./../assets/sad-face.svg";
import happyFace from "./../assets/happy-face.svg";
import sun from "./../assets/sun.svg";
const Tags = () => {
  return <div className="tags">
    <div className="tags__section">
    <img src={sadeFace} alt="sade-face" className="tags__section__img" />
    <span ><p className="tags__section__name">Tag sade</p></span>
    </div>
    <div className="tags__section">
    <img src={happyFace} alt="sade-face" className="tags__section__img" />
    <span ><p className="tags__section__name">Tag happy</p></span>
    </div>
    <div className="tags__section">
    <img src={sun} alt="sade-face" className="tags__section__img" />
    <span ><p className="tags__section__name">Tag shiny</p></span>
    </div>
    
    
    
  </div>;
};

export default Tags;
