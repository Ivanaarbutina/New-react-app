import "bootstrap/dist/css/bootstrap.min.css";
import {Tabs, Tab,} from "react-bootstrap";
import BootstrapButton from "./bootstrap/bootstrap-button";
import BootstrapAccordion from "./bootstrap/bootstrap-accordion";
import BootstrapCard from "./bootstrap/bootstrap-card";
import BootstrapGraf from "./bootstrap/bootstrap-grafcard";
import BootstrapTable from "./bootstrap/bootstrap-table";
import BootstrapGame from "./bootstrap/bootstrap-game";

const BootstrapExe = () => {
  
  return (
    <div>
      <BootstrapAccordion/>
      <BootstrapButton/>
      <div className="containerbs">
        <div>
            <Tabs>
              <Tab eventKey="dashboard" title="Dashboard">
                <div className="bootstrap__section">
                  <BootstrapCard/>
                  <BootstrapGraf/>
                </div>
                <BootstrapTable/>
              </Tab>
              
              <Tab eventKey="game" title="Game">
               <BootstrapGame/>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
  );
};

export default BootstrapExe;
