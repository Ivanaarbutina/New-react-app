import robot from "../../assets/robot-svgrepo-com 1.png";
import cool from "../../assets/cool-svgrepo-com 1.png";
import grass from "../../assets/rect15742.png";
import { useEffect, useState } from "react";

const BootstrapGame = () => {
  // const [robotPosition, setRobotPosition] = useState(0);
  // const [coolPosition, setCoolPosition] = useState(0);
  // const [winner, setWinner] = useState("");

  // useEffect(() => {
  //   const handleKeyDown = (event: React.KeyboardEvent<Element>) => {
  //     if (event.keyCode === 32) {
  //       // Tipka razmak (space) za pomjeranje slike bootstrap__robot
  //       setRobotPosition((prevPosition) => prevPosition + 10);
  //     } else if (event.keyCode === 48) {
  //       // Tipka "0" za pomjeranje slike bootstrap__cool
  //       setCoolPosition((prevPosition) => prevPosition + 10);
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown as any);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown as any);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (robotPosition >= 840) {
  //     setWinner("Robot");
  //   } else if (coolPosition >= 840) {
  //     setWinner("Cool");
  //   }
  // }, [robotPosition, coolPosition]);
  return (
    <div>
        <div>
          <div className="bootstrap__game1">
             <img className="bootstrap__robot" 
             src={robot}
              alt="Robot"
              // style={{ marginLeft: `${robotPosition}px` }}
             />
               <button
                 className="bootstrap__gamebtn">
                 Finish
               </button>
           </div>
           <div className="bootstrap__game2">
            <img src={grass} alt="Grass"/>
            <img src={grass} alt="Grass"/>
            <img src={grass} alt="Grass"/>
           </div>
          </div>
         <div className="bootstrap__vertical">
         {/* {winner && <p className="bootstrap__message">Pobjednik je: {winner}</p>} */}
         </div>
       <div>
         <img className="bootstrap__cool" 
         src={cool} 
         alt="Cool"
        //  style={{ marginLeft: `${coolPosition}px` }}
         />
       </div>
       <div className="bootstrap__game2">
         <img src={grass} alt="Grass"/>
         <img src={grass} alt="Grass"/>
         <img src={grass} alt="Grass"/>
      </div>
    </div>
  )
}

export default BootstrapGame;