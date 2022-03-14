import React from "react";
import "./App.css";
import MyCard from "./components/cards/MyCard";
import data from "./data";
import MyNavbar from "./components/navbar/MyNavbar";
import MyHeader from "./components/header/MyHeader";

function App() {
  return (
    <div>
      <MyNavbar fixed="top" />
      <MyHeader />
      <MyCard data={data} />
    </div>
  );
}

export default App;
