const Petlje = () => {
  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;

    const inputValue = Number(input.value);
    console.log(inputValue);

    const pi: number = 3.14;
    let r: number = 4;

    //Zadatci
    //1. ispisati u konzolu jeli zadani broj neparan
    if (!(inputValue % 2)) {
      console.log("paran broj");
    } else {
      console.log("neparan broj");
    }

    //2. ispisati u konzolu brojeve od 0 do zadanog broja
    for (let i = 0; i <= 10; i++) {
      console.log("Value of i is:" + i);
    }
    //3. izračunaj opseg kruga gdje je zadani broj polumjer (pi*r*2)
    let opseg = pi * r * 2;
    console.log(opseg);

    let numbers = [1, 2, 3, 4, 5];
    console.log(numbers);
  };
  return (
    <div className="container">
      <h1>Petlje</h1>
      <hr />
      <div>
        <input className="input" type="number" />
        <button onClick={() => handleValue()}>Submit</button>
      </div>
    </div>
  );
};

export default Petlje;
