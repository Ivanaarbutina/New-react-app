import { useEffect } from "react";

const Vjezba1505 = () => {
  //1. Funkcija koja zbraja dva broja iz parametara

  const add = (a: number, b: number) => {
    return a + b;
  };

  //2. Funkcija koja spaja dva array-a stringova
  const array1 = ["mouse", "cat", "dog"];
  const array2 = ["monkey", "tiger", "lion"];

  const concatArrays = (a: string, b: string) => {
    return a.concat(b);
  };

  //3. Funkcija koja treba u konzolu ispisati brojeve od 1 do 10
  let numTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const countToTen = () => {
    for (let i = 0; i <= 11; i++) {
      if (numTen > i) console.log(i);
    }
  };

  //4. Funkcija koja zbraja sve broojeve iz array-a
  const num = [5, 6, 9, 4];
  const sumArray = (numbers: number) => {
    let sum = 0;

    for (let i = 0; i <= numbers; i++) {
      sum += num[i];
      console.log(numbers);
    }
    return sum;
  };

  //5. Funkcija koja će vratiti puno ime iz objekta user
  type UserType = {
    firstName: string;
    lastName: string;
  };
  const user: UserType = {
    firstName: "Ivan",
    lastName: "Sakoman",
  };

  const getFullName = (person: UserType) => {
    return person.firstName + person.lastName;
  };

  getFullName(user);

  //6. Funkcija koja pretvara celsius to fahrenheit
  //formula =>  °C * 1.8 + 32 = °F
  const celsiusToFahrenheit = (celsius: string) => {
    return celsius * (1.8 + 32);
  };

  //7. Funkcija koja ispisuje string naopako
  const reverseString = (str: boolean) => {
    let reversedStr = "";
    for (let i = str.length - 1; i > 0; i--) {
      reversedStr += str[i - 1];
    }
    return reversedStr;
  };

  useEffect(() => {
    //Ovdje možemo pokretati funkciju koju testiramo
    console.log(add(1, 2));
    console.log(concatArrays(array1, array2));

    console.log(sumArray);
    console.log(getFullName(user));
  }, []);
  return (
    <div className="container">
      <div>{add(1, 2)}</div>
      <div></div>
    </div>
  );
};

export default Vjezba1505;
function expected(a: any, b: any) {
  throw new Error("Function not implemented.");
}
