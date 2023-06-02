import {frontRazred} from "../data/frontRazred";

type GenderType = "male" | "female";


 export type StudentType = {
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

  //Pronadji sve osobe kojima ime pocinje na slovo "M"
  let nameWithM = frontRazred.findIndex((item) => item.name[0] === "M");
  console.log(frontRazred[nameWithM].name);

  //Pronadji sve osobe koje su vislje od 160 a nize od 180

  const filteredStudents = frontRazred.filter(
    (student) => student.height > 160 && student.height < 180
  );
  console.log(filteredStudents);

  //Pronadji sve osobe kojima je omiljena boja crvena
  const redFavoriteColorStudents = frontRazred.filter(
    (student) => student.favoriteColor === "red"
  );

  console.log(redFavoriteColorStudents);

  //Pronadji sve osobe kojima prezime zavrsava na "c" ili "ć"

  const filteredLastName = frontRazred.filter((student) =>
    /c$|ć$/i.test(student.lastName)
  );
  console.log(filteredLastName);

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

        <table className="varijable__table">
          <thead>
            <tr>
              <th>Name</th>
              <th>LastName</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Height</th>
              <th>Hobby</th>
              <th>Employed</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {frontRazred.map((student) => {
              return (
                <tr>
                  <td>{student.name}</td>
                  <td>{student.lastName}</td>
                  <td>{student.age}</td>
                  <td>{student.gender}</td>
                  <td>{student.height}</td>
                  <td>{student.hobby}</td>
                  <td>{student.employed}</td>
                  <td>{student.favoriteColor}</td>
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
