import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import SliderBox from "./components/slider/SliderBox.js";
import React from "react";
import Content from "./components/Content/Content";
import Clicker from "./components/clicker/Clicker.jsx";

function App() {
  
  return (
    <div className="App" extends Component>
      <Header />
      <SliderBox />
      <Content />
      <Clicker />
    </div>
  );
}

export default App;
