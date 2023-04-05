import Button from "./components/button";
import Checkbox from "./components/checkbox";
import FlexSecond from "./components/flex-2";
import FlexExe from "./components/flex-exe";
import Form from "./components/form";
import Header from "./components/header";
import HomeWork from "./components/home-work";
import Input from "./components/input";
import Modal from "./components/modal";
import Navigation from "./components/navigation";
import Pagination from "./components/pagination";
import Tags from "./components/tags";
import TransformExe from "./components/transform-exe";
import "./styles/styles.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <h2>Input</h2>
        <Input label="First Name" validation="ok" />
        <Input label="Last Name" rounded={true} />
      </div>
      <div className="container">
        <h2>Css exercise</h2>
        <Navigation />
        <Button value="animate" />
        <Button />
        <Checkbox />
        <Form />
        <Pagination />
        <Tags />
        <Modal />
      </div>

      <div className="container">
        <h2>Transform property exercise</h2>
        <TransformExe />
      </div>

      <div className="container">
        <h2>Flex</h2>
        <FlexExe />
      </div>

      <div className="container">
        <h2>Flex 2</h2>
        <FlexSecond />
      </div>

      <div className="container">
        <h2>Home work</h2>
        <HomeWork />
      </div>
    </div>
  );
};

export default App;
