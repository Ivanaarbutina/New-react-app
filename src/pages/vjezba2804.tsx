type StudentType = {
  name: string;
  lastName: string;
  age: number;
  gender: string;
  height: number;
  hobby: string;
  employed: boolean;
  favoriteColor: string;
};

const Vjezba2804 = () => {
  const frontRazred: StudentType[] = [
    {
      name: "Ivan",
      lastName: "Sakoman",
      age: 29,
      gender: "male",
      height: 183,
      hobby: "Cycling",
      employed: true,
      favoriteColor: "red",
    },
    {
      name: "Goran",
      lastName: "Viljanac",
      age: 19,
      gender: "male",
      height: 185,
      hobby: "Musician",
      employed: true,
      favoriteColor: "green",
    },
    {
      name: "Katharina",
      lastName: "Zlosa",
      age: 27,
      gender: "female",
      height: 180,
      hobby: "reading",
      employed: true,
      favoriteColor: "green",
    },
    {
      name: "Antun",
      lastName: "Glumac",
      age: 22,
      gender: "male",
      height: 185,
      hobby: "Football",
      employed: false,
      favoriteColor: "Red",
    },
    {
      name: "Nikolina",
      lastName: "Kirčanski",
      age: 40,
      gender: "female",
      height: 164,
      hobby: "Martial arts",
      employed: true,
      favoriteColor: "black",
    },
    {
      name: "Robert",
      lastName: "Đujić",
      age: 24,
      gender: "male",
      height: 182,
      hobby: "Books, movies, games",
      employed: false,
      favoriteColor: "silver",
    },
    {
      name: "Monika",
      lastName: "Ivankovic",
      age: 23,
      gender: "female",
      height: 164,
      hobby: "roller skating",
      employed: true,
      favoriteColor: "grey",
    },
    {
      name: "Maja",
      lastName: "Juratovac",
      age: 32,
      gender: "female",
      height: 169,
      hobby: "dancing",
      employed: true,
      favoriteColor: "blue",
    },
    {
      name: "Ivan",
      lastName: "Puljić",
      age: 25,
      gender: "male",
      height: 175,
      hobby: "running",
      employed: false,
      favoriteColor: "blue",
    },
    {
      name: "Sara",
      lastName: "Cindric",
      age: 24,
      gender: "female",
      height: 161,
      hobby: "writing",
      employed: false,
      favoriteColor: "black",
    },
    {
      name: "Kristian",
      lastName: "Radoš",
      age: 30,
      gender: "male",
      height: 188,
      hobby: "Netflix",
      employed: true,
      favoriteColor: "blue",
    },
    {
      name: "Ivana",
      lastName: "Arbutina",
      age: 42,
      gender: "female",
      height: 166,
      hobby: "slikanje",
      employed: false,
      favoriteColor: "red",
    },
  ];
  //Pronadji sve osobe kojima ime pocinje na slovo "M"
  let nameWithM = frontRazred.findIndex((item) => item.name[0] === "M");
  console.log(frontRazred[nameWithM].name);

  //Pronadji sve osobe koje su vislje od 160 a nize od 180
 

  return (
    <div>
      <h2>Vjezba</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Hobby</th>
              <th>favoriteColor</th>
            </tr>
          </thead>
          <tbody>
            {frontRazred.map((student) => {
              return (
                <tr>
                  <td>{student.name}</td>
                  <td>{student.hobby}</td>
                  <td>{student.favoriteColor}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ul>
          {frontRazred.map((student) => {
            return (
              <li>
                {student.age}
                {student.gender}
                {student.height}
              </li>
            );
          })}
        </ul>

        <table>
          <thead>
            <tr>
              <td>Age</td>
              <td>Gender</td>
              <td>Height</td>
            </tr>
          </thead>
          <tbody>
            {frontRazred.map((student) => {
              return (
                <tr>
                  <td>{student.age}</td>
                  <td>{student.gender}</td>
                  <td>{student.height}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vjezba2804;
