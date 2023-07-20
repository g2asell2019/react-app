import React from "react";
import ReactDOM from "react-dom/client";
import MainNewsPaper from "./NewsPaper/MainNewsPaper.tsx";
//import App from './App.tsx'
import "./index.css";

import ListGroup from "./PageHeader.tsx";
import Tin360 from "./NewsPaper/Tin360.tsx";
import BaoThanhNien from "./NewsPaper/BaoThanhNien.tsx";
import SideTab from "./NewsPaper/SideTab.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ListGroup></ListGroup>
    <div id="wrapper">
      <div style={{display:"inline-flex"}}>
      <MainNewsPaper></MainNewsPaper>
      <SideTab></SideTab>
      </div>

      <div>
        <Tin360></Tin360>
      </div>
    </div>
  </React.StrictMode>
);
