import { Form } from "react-router-dom";
import Button from "../components/button";
import Card from "../components/card";
import Checkbox from "../components/checkbox";
import FlexSecond from "../components/flex-2";
import FlexExe from "../components/flex-exe";
import GridCard from "../components/grid-card";
import HomeWork from "../components/home-work";
import Input from "../components/input";
import Modal from "../components/modal";
import Navigation from "../components/navigation";
import Pagination from "../components/pagination";
import Tags from "../components/tags";
import TransformExe from "../components/transform-exe";
import Table from "../components/table";

const Exe = () => {
  return (
    <div>
      <div className="container">
        <h2>Input</h2>
        <Input label="First Name" validation="ok" />
        <Input label="Last Name" rounded={true} />
      </div>
      <div className="container">
        <h2>Css exercise</h2>
        <Navigation />
        <Button value="animate" animate={true} />
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

      <div className="container">
        <h2>Card</h2>
        <div className="card__wrapper">
          <Card
            title="Naslov"
            discription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Laudantium cupiditate  error, autem quidem dolore tempore veritatis!"
          />
          <Card
            title="Naslov-2"
            discription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Laudantium cupiditate  error, autem quidem dolore tempore veritatis!"
          />
          <Card
            title="Naslov-3"
            discription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Laudantium cupiditate  error, autem quidem dolore tempore veritatis!"
          />
          <Card
            title="Naslov-4"
            discription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Laudantium cupiditate  error, autem quidem dolore tempore veritatis!"
          />
        </div>
      </div>

      <div className="container">
        <h2>Grid Card</h2>
        <div className="card__wrapper">
          <GridCard />
          <GridCard />
          <GridCard />
          <GridCard />
        </div>
      </div>
      <div className="container"><Table/></div>
    </div>
  );
};

export default Exe;
