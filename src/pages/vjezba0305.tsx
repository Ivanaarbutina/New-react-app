import { useEffect, useState } from "react";

const Vjezba0305 = () =>{
    //Zadatci
  //1. dohvatimo box i promjenimo mu background-color (kroz JS)
  //2. dodamo dodatnu klasu na box koja će povecati njegove dimenzije
  //3. animiramo box do 30px i nazad (kroz JS)
  //3.2. animirati box dijagonalno do (30px,30px) i nazad do 50px
  //4. kreiramo funkciju koja će imati lokalnu varijablu u kojoj ćemo izracunati sumu 2 parametra i rezultat ispisati unuatr box-a
  function calculateAndPrintSum(a: number, b: number) {
    const sum = a + b;
    const box = document.getElementsByClassName("box")[0] as HTMLDivElement;
    box.innerText = "The sum is " + sum;
    box.style.width = "100px";
    box.style.height = "50px";
    
    document.body.appendChild(box);
  }
  
   //5. dodaj onClick event i na klik smanji dimenzije box-a


function Box() {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const handleClick = () => {
    setWidth(width - 50);
    setHeight(height - 50);
  };
}
  let position = 0;
  let reverse = false;

  useEffect(() => {
    const box = document.getElementsByClassName("box")[0] as HTMLDivElement;
    // Zadatak 1.
    box.style.backgroundColor = "green";

    // Zadatak 2.
    box.classList.add("new");

    //Zadatak 3.
    const frame = () => {
      if (reverse) {
        position--;
      } else {
        position++;
      }
      const currentPosition = position + "px";

      if (position == 30) {
        reverse = true;
      }
      if (position == 0) {
        reverse = false;
      }

      box.style.marginLeft = currentPosition;
    };
    setInterval(frame, 200);
  }, []);

  let posX = 0;
  let posY = 0;
  let reverseX = false;
  let reverseY = false;
  const box = document.querySelector('.box');

const animateBox = () => {
  if (reverseX) {
    posX--;
  } else {
    posX++;
  }
  if (reverseY) {
    posY--;
  } else {
    posY++;
  }
  const currentPosX = posX + 'px';
  const currentPosY = posY + 'px';
  if (posX >= 30) {
    reverseX = true;
  } else if (posX <= 0) {
    reverseX = false;
  }
  if (posY >= 30) {
    reverseY = true;
  } else if (posY <= 0) {
    reverseY = false;
  }
  box.style.marginLeft = currentPosX;
  box.style.marginTop = currentPosY;
  requestAnimationFrame(animateBox);
};

requestAnimationFrame(animateBox);


//Zadatak 3.2.
function moveBox() {
  const [position, setPosition] = useState(50);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const box = document.getElementsByClassName(
      "box"
    )[1] as HTMLDivElement;
    const frame = () => {
      if (reverse) {
        setPosition((p) => p - 1);
      } else {
        setPosition((p) => p + 1);
      }
      const currentPosition = position + "px";

      if (position === 30) {
        setReverse(true);
      }
      if (position === 50) {
        setReverse(false);
      }

      box.style.marginLeft = currentPosition;
      box.style.marginTop = currentPosition;
    };

    const interval = setInterval(frame, 10);

    return () => clearInterval(interval);
  }, [position, reverse]);

  
}



  //Zadatak 5.
  function handleClick() {
    const box = document.getElementsByClassName("box")[0] as HTMLDivElement;
    box.style.width = "3rem";
    box.style.height = "3rem";
  }
  


  return(
    <div className="container">
      <h2>Vjezba 0305</h2>
      <div className="box" onClick={() => {handleClick(); calculateAndPrintSum(2,3);}}></div>
      <div className="box" onClick={()=>moveBox()}></div>
    </div>
  );
};
export default Vjezba0305;