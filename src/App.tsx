import Button from "./components/button";
import Checkbox from "./components/checkbox";
import FlexSecond from "./components/flex-2";
import FlexExe from "./components/flex-exe";
import Form from "./components/form";
import Header from "./components/header";
import Modal from "./components/modal";
import Navigation from "./components/navigation";
import Pagination from "./components/pagination";
import Tags from "./components/tags";
import "./styles/styles.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Navigation />
        <Button />
        <Checkbox />
        <Form />
        <Pagination />
        <Tags />
        <Modal />
      </div>

      <div className="container">
        <h2>Transform property exercise</h2>
        <div className="box__wrapper">
          <h4>Translate</h4>
          <div className="box box--translate"></div>

          <h4>Rotate</h4>
          <div className="box box--rotate"></div>

          <h4>Scale</h4>
          <div className="box box--scale"></div>

          <h4>Skew</h4>
          <div className="box box--skew"></div>
        </div>
      </div>

      <div className="container">
        <FlexExe />
        <FlexSecond />
      </div>
    </div>
  );
};

export default App;
