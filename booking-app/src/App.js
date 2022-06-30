import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Routes, Route, useParams } from 'react-router-dom';

import Header from "./Components/Header"

const App = () => {
  render()
  return (
    <BrowserRouter>
      <Routes>    
        <Route exact path="/" element={<Header />}> 
      </Routes>
  </BrowserRouter>
  );
}

export default App;
