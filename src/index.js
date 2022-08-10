import React from "react";
import ReactDOM from "react-dom/client";
import AppCalc from "./component/AppCalc";
import AppCommerce from "./component/AppCommerce";
import AppLibrary from "./component/AppLibrary";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppCommerce />
    // <AppCalc />
    // <AppLibrary/>
);