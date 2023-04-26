const Vjezba2604 = () => {
  let arr = ["mama", "tata", "baka", "dida"];

  for (let i = 0; i < arr.length; i++) {
    //if (i == 2) {
    //  break;
    //}
    // console.log(arr[i]);
  }
  // arr.push("Ivana");

  // console.log("nas array je:", arr);

  //Funkcije

  let baka: string;

  function bringBaka() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "baka") {
        baka = arr[i];
        console.log(baka);
        return baka;
      }
    }
  }

  const printText = (text: string) => {
    return text;
  };

  //Objekti
  type CarType = {
    [key: string]: number | string;
  };
  let car: CarType = {
    obujamMotora: 1600,
    boja: "srebrna",
    motor: "diezel",
    godina: 2022,
    marka: "Ford",
    model: "C-max",
  };

  const recenica =
    "Moj auto je " +
    car.marka +
    " model " +
    car.model +
    " godište " +
    car.godina +
    " motor " +
    car.motor;

  console.log(recenica);

  const printValue = (key: string) => {
    return car[key];
  };
  //Zadatak

  const brojevi = [1, 3, 5, 8, 9, 10, 15, 16, 18];
  const greatestNumber:number;
  function biggestNumber() {
    for (let i = 0; i < brojevi.length; i++) {
      if (brojevi[i]) {
      
      }
    }

  return (
    <div>
      <h1>Funkcije</h1>
      {bringBaka()}

      <div>{printValue("motor")}</div>
    </div>
  );
};
export default Vjezba2604;
