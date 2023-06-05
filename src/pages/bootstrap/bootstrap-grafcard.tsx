//import { Card } from "react-bootstrap";
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";

const data = [
  { name: "Jan", uv: 400, pv: 2400 },
  { name: "Feb", uv: 300, pv: 1398 },
  { name: "Mar", uv: 200, pv: 9800 },
  { name: "Apr", uv: 278, pv: 3908 },
  { name: "May", uv: 189, pv: 4800 },
  { name: "Jun", uv: 239, pv: 3800 },
  { name: "Jul", uv: 349, pv: 4300 },
  { name: "Aug", uv: 200, pv: 2400 },
  { name: "Sep", uv: 278, pv: 3408 },
  { name: "Oct", uv: 189, pv: 4800 },
  { name: "Nov", uv: 239, pv: 3800 },
  { name: "Dec", uv: 349, pv: 4300 },
];

const BootstrapGraf = () => {
  return (
    <div>
      {/* <Card className="bootstrap__cards">
          <LineChart width={393} height={180} data={data}>
           <XAxis dataKey="name" />
           <YAxis />
           <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
           <Line type="monotone" dataKey="uv" stroke="#8884d8" />
           <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </Card> */}
    </div>
  );
};

export default BootstrapGraf;
