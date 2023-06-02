import "bootstrap/dist/css/bootstrap.min.css";
import {
  Accordion,
  Button,
  Alert,
  Card,
  Table,
  Tabs,
  Tab,
  TabPane,
  TabContainer,
  ProgressBar,
} from "react-bootstrap";
import { famArt } from "../data/artData";
import { useState } from "react";
import { frontRazred } from "../data/frontRazred";
import robot from "../assets/robot-svgrepo-com 1.png";
import cool from "../assets/cool-svgrepo-com 1.png";
import grass from "../assets/rect15742.png";
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

type ArtType = {
  name: string;
  lastName: string;
  born: number;
  died: number;
  country: string;
  directionOfArt: string;
  profilImage: string;
  image: string;
  id: number;
  info: string;
  imageName: string;
  quote: string;
  galleryImages: string[];
  biografy: string;
};
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

const BootstrapExe = () => {
  const [isBiografyVisible, setIsBiografyVisible] = useState(false);
  const [artistBiografy, setArtistBiografy] = useState<ArtType | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });

  const handleKeyPress = (event) => {
    const { key } = event;
    let newX = robotPosition.x;
    let newY = robotPosition.y;

    // Promijeni poziciju robota na temelju pritisnute tipke
    if (key === "ArrowUp") {
      newY -= 1;
    } else if (key === "ArrowDown") {
      newY += 1;
    } else if (key === "ArrowLeft") {
      newX -= 1;
    } else if (key === "ArrowRight") {
      newX += 1;
    }

    // Ažuriraj poziciju robota
    setRobotPosition({ x: newX, y: newY });
  };
  const handleClick = () => {
    setShowAlert(true);
  };

  return (
    <div>
      <div className="containerbs">
        {famArt.map((artist) => {
          isBiografyVisible && artistBiografy?.id === artist.id;
          return (
            <Accordion defaultActiveKey={`${artist.name}-${artist.lastName}`}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>{`${artist.name}-${artist.lastName}`}</Accordion.Header>
                <Accordion.Body>
                  <div className="art__exe">
                    <img
                      className="art__image"
                      src={artist.profilImage}
                      alt={`${artist.name} ${artist.lastName}`}
                    />
                    <span>"{artist.quote}"</span>
                  </div>

                  <div>{artist.biografy}</div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}
      </div>

      <div className="containerbs">
        <div></div>
        <div>
          <Button onClick={handleClick}>Click me</Button>
          {showAlert && (
            <Alert
              variant="danger"
              onClose={() => setShowAlert(false)}
              dismissible
              className="bootstrap__alert"
            >
              <Alert.Heading>Kliknuo si me!</Alert.Heading>
            </Alert>
          )}
        </div>
      </div>
      <div className="containerbs">
        <div>
          <div>
            <TabContainer defaultActiveKey="dashboard">
              <Tab.Content>
                <TabPane eventKey="dashboard" title="Dashboard">
                  <div></div>
                </TabPane>
              </Tab.Content>
            </TabContainer>

            <Tabs
              defaultActiveKey="profile"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="dashboard" title="Dashboard">
                <div className="bootstrap__section">
                  <Card className="bootstrap__cards">
                    <Card.Body>
                      <div className="bootstrap__boxs">
                        <span className="bootstrap__numb">45</span>
                        <div>
                          <p>Ovo je neki text</p>
                          <p>koji nesto objasnjava</p>
                        </div>
                      </div>
                      <ProgressBar striped variant="info" now={20} />
                    </Card.Body>
                  </Card>
                  <Card className="bootstrap__cards">
                    <LineChart width={393} height={180} data={data}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                    </LineChart>
                  </Card>
                </div>

                <Table>
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
                </Table>
              </Tab>
              <Tab eventKey="game" title="Game">
                <div>
                  <div className="bootstrap__game1">
                    <img className="bootstrap__robot" src={robot} />

                    <button
                      className="bootstrap__gamebtn"
                      onClick={handleKeyPress}
                    >
                      Finish
                    </button>
                  </div>

                  <div className="bootstrap__game2">
                    <img src={grass} />
                    <img src={grass} />
                    <img src={grass} />
                  </div>
                </div>
                <div className="bootstrap__vertical"></div>
                <div>
                  <img className="bootstrap__cool" src={cool} />
                </div>
                <div className="bootstrap__game2">
                  <img src={grass} />
                  <img src={grass} />
                  <img src={grass} />
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootstrapExe;
