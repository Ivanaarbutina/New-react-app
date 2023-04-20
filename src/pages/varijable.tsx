import { useState } from "react";

type UserType = {
  name: string;
  lastName: string;
  age: number;
  height: number;
};

const Varijable = () => {
  const [value, setValue] = useState<number>(3.14);

  const name: string = "Banana";
  const calorie: number = 88.7;
  const colorFruit: string = "yellow";
  const edable: boolean = true;

  const pi: number = 3.14;
  const number: number = 4;
  let color: string = "red";
  // dostupne marke automobila
  let car: "bmw" | "audi" | "ferarri" = "bmw";

  const obj: UserType = {
    name: "Ivana",
    lastName: "Arbutina",
    age: 42,
    height: 166,
  };

  // obje vrijednosti moraju biti true,kako bi program ušao u statement
  if (pi & number) {
  }
  //samo jedna vrijednost mora biti true
  if (pi | number) {
  }

  const addOnOurValue = (ourValue: number) => {
    return number + ourValue;
  };

  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;
    console.log(input.value);
    setValue(Number(input.value));
  };

  return (
    <div>
      <div>
        <h4>Vrijednost pi varijable je: {pi + 5}</h4>
        <h4>Vrijednost color varijable je :{color + "red"}</h4>
        <h4>Vrijednost car varijable je: {car}</h4>
      </div>
      <div>
        <h4>Vrijednost našeg statea je {value}</h4>
        <input className="input" type="number"></input>
        <button onClick={() => handleValue()}>Submit</button>
      </div>
      <div>
        <>Rezultat naše funkcije je : {addOnOurValue(5)}</>
      </div>
      <div>
        <h4>
          Vrijednost našeg objekta su : {obj.name} {obj.lastName}
        </h4>
      </div>
      <div>Godine:{obj.age}</div>
      <div>Visina:{obj.height}</div>

      <div>
        <tr>
          <th>Fruit</th>
          <th>name</th>
          <th>calorie</th>
          <th>color</th>
        </tr>
        <tr>
          <td>name</td>
          <td>{name}</td>
        </tr>
        <tr>
          <td>Calorie</td>
          <td>{calorie}</td>
        </tr>
        <tr>
          <td>Color</td>
          <td>{colorFruit}</td>
        </tr>
      </div>
    </div>
  );
};

export default Varijable;
