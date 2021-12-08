import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Soda from "./Soda";
import Water from "./Water";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine/>}/>              
          <Route path="/chips" element={<Chips/>}/>
          <Route path="/soda" element={<Soda/>}/>
          <Route path="/water" element={<Water/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
