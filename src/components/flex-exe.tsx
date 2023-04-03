import FlexPics from "./../assets/flex-photo.jpg";
import HappyFace from "./../assets/happy-face.svg";
import FlexPics2 from "./../assets/flex-photo2.jpg";
import SadFace from "./../assets/sad-face.svg";
const FlexExe = () => {
  return (
    <div className="flex-exe">
      <h2 className="flex-exe__title">Flex</h2>

      <div className="flex-exe__box">
        <div className="flex-exe__first">
          <img className="flex-exe__img" src={FlexPics} alt="flex-img" />
          <span className="flex-exe__text">Text</span>
        </div>

        <img className="flex-exe__icon" src={HappyFace} />
      </div>

      <div className="flex-exe__box2">
        <span className="flex-exe__text">Text</span>
        <img className="flex-exe__icon" src={SadFace} />
      </div>

      <div className="flex-exe__box3">
        <img className="flex-exe__img" src={FlexPics2} alt="flex-img2" />
        <span className="flex-exe__text">Text</span>
      </div>
    </div>
  );
};

export default FlexExe;
