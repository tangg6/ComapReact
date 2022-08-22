// App.js
import * as React from "react";
import Navigator from "./navigation/Navigator.jsx";
import { Router, Routes, Route, Link } from "react-router-dom";

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function App() {
  return (
    <div >
      <Navigator Name={'KT'}/>
    </div>
        
  );
}

export default App;