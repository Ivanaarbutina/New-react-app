//import { Table } from "react-bootstrap";
import { frontRazred } from "../../data/frontRazred";

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

const BootstrapTable = () => {
  return (
    <div>
      {/* <Table striped bordered hover>
             <thead>
               <tr>
                 <th>Name</th>
                 <th>LastName</th>
                 <th>Height</th>
                 <th>Hobby</th>
               </tr>
             </thead>
             <tbody>
              {frontRazred.map((student: StudentType) => {
                return (
                 <tr key={student.name}>
                    <td>{student.name}</td>
                    <td>{student.lastName}</td>
                    <td>{student.height}</td>
                    <td>{student.hobby}</td>
                 </tr>
                );
             })}
           </tbody>
         </Table> */}
    </div>
  );
};

export default BootstrapTable;
