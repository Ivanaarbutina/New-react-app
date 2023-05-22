import { useState } from "react";

const Zadaca = () => {
  //1.Zadatak
  //- Kreiraj varijablu u koju spremiš svoje ime (string)
  let myName: string = "Ivana";
  //- Kreiraj varijablu u koju spremiš svoje godine (number)
  let myAge: number = 42;
  //- ispiši u browseru (u DOM-u) svoje ime i godine iz tih varijabli

  //2.Zadatak
  //Provjeri jeli 40 broj veci od varijable s tvojim godinama i ako je ispiši u konzolu "imam više od 40 godina", a ako nije ispiši "nemam više od 40 godina"
  if (myAge < 40) {
    console.log("nemam vise od 40 godina");
  } else if (myAge > 40) {
    console.log("imam vise od 40 godina");
  }

  //3. Zadatak
  //Ispiši koliko znakova ima u tvom imenu (koristi varijablu s imenom)
  let letter = myName.length;
  console.log(letter);

  //4. Zadatak
  //- Kreiraj array s 10 brojeva
  let tenNum = [1, 2, 3, 4, 5, 8, 9, 11, 15, 20];
  //- Napiši for petlju koja će u konzolu ispisati sve brojeve iz niza (array-a)
  for (let i = 0; i < 10; i++) console.log(tenNum[i]);

  //5. Zadatak
  //- Napiši funkciju koja će zbrojiti dva broja i ispisati njihovo rjesenje kada ju pozoves.
  //(funkciju ako želiš iskoristiti moras je pozvati npr ako ti se funkcija zove "sum" onda ćeš ju pozvati tako da napišeš njeno ime i staviš zagrade npr: sum() i još pošto tvoja funkcija treba primiti 2 broja morat ćeš je pozvati npr ovako: sum(1,4) i onda u funkciji zbrojiš ta dva broja primjer takve funkcije izgleda ovako:
  //function sum(a,b) {return a+b} probaj sama to napraviti i iskoristiti i skužiti kako to radi :) ako bude pitanja pingaj me na slack :D)

  function addTwoNum(num1: number, num2: number) {
    return num1 + num2;
  }
  console.log(addTwoNum(350, 16));

  return (
    <div className="container">
      <h2>Zadaca</h2>
      <p>
        Zovem se {myName}, i imam {myAge} godine.
      </p>
      <div>{addTwoNum(30, 54)}</div>
    </div>
  );
};

export default Zadaca;
