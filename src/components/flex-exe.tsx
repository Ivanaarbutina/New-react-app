import FlexPics from "./../assets/flex-photo.jpg";
import PencilSquare from "./../assets/pencil-square.svg";
import FlexPics2 from "./../assets/flex-photo2.jpg";
import XMark from "./../assets/x-mark.svg";
const FlexExe = () => {
  return (
    <div >
      <div className=" flex flex__box">
        <div className="flex__first">
          <img className="flex__img" src={FlexPics} alt="flex-img" />
          <span className="flex__text">Text</span>
        </div>

        <img className="flex__icon" src={PencilSquare} />
      </div>

      <div className="flex flex__box2">
        <span className="flex__text">Text</span>
        <img className="flex__icon" src={XMark} />
      </div>

      <div className="flex flex__box3">
        <img className="flex__img" src={FlexPics2} alt="flex-img2" />
        <span className="flex__text">Text</span>
      </div>
    </div>
  );
};

export default FlexExe;
