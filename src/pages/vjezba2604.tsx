const Vjezba2604 = () => {
  //Nizovi
  let arr = ["mama", "tata", "baka", "dida"];
  for (let i = 0; i < arr.length; i++) {
    //kada dodjemo ddo vrijednosti "baka" izadji iz for petlje
    if (arr[i] == "baka") {
      break;
    }
    //izbaci vrijednost "tata" iz array-a
    if (arr[i] == "tata") {
      delete arr[i];
      //ili
      const removeIndex = arr.indexOf("tata");
      //koristi splice samo kada je index pronadjen što zneči da mora biti veći od -1
      if (removeIndex > -1) {
        arr.splice(removeIndex, 1);
      }
    }
    console.log(arr[i]);
  }
  delete arr[1];
  arr.push("Ivana");
  console.log("nas array je: ", arr);

  //Funkcije
  let baka: string;
  function bringBaka() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "baka") {
        baka = arr[i];
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
  let largest = Math.max(1, 3, 5, 8, 9, 10, 15, 16, 18);

  function biggestNumber() {
    let greatestNumber: number = 0;

    for (let i = 0; i < brojevi.length; i++) {
      if (brojevi[i] > greatestNumber) {
        greatestNumber = brojevi[i];
      }
    }

    return greatestNumber;
  }

  //Zadača
  //ispiši najdužu i najkraću riječ iz niza

  const rijeci = [
    "balance",
    "biscuit",
    "side",
    "grind",
    "refund",
    "cast",
    "circulate",
    "accumulation",
    "fold",
    "cut",
    "entertainment",
  ];
  function findLongestWord() {
    let longestWord = 0;
    for (let i = 0; i < rijeci.length; i++) {
      if (rijeci[i].length > longestWord) {
        longestWord == rijeci[i].length;
      }
    }
    return longestWord;
  }

  function findShortestWord() {
    let shortestWord = 0;
    for (let i = 0; i > rijeci.length; i++) {
      if (rijeci[i].length < shortestWord) {
        shortestWord == rijeci[i].length;
      }
    }
    return shortestWord;
  }

  return (
    <div className="container">
      <h1>Funkcije</h1>
      <div>{bringBaka()}</div>
      <div>{printText("Neki tekst")}</div>
      <h1>Objekti</h1>
      <div>{recenica}</div>
      <pre>{JSON.stringify(car, null, 2)}</pre>
      <div>{printValue("motor")}</div>
      <div>{largest}</div>
      <div>{biggestNumber()}</div>
      <div>{findLongestWord()}</div>
      <div>{findShortestWord()}</div>
    </div>
  );
};

export default Vjezba2604;
