import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from "./Components/Header";
import Home from "./Components/Home"
import RoomDetail from './Components/RoomDetail';
import ReservationPage from './Components/ReservationPage'
import ReservationValidation from './Components/ReservationValidation'
import UserReservations from './Components/UserReservations'
import ReservationPageClient from './Components/ReservationPageClient'
import Inscription from './Components/Connexion/Inscription'
import Connexion from './Components/Connexion/Connexion'



const App = () => {
  return (
    <BrowserRouter>
      <div> 
          <Header/>
          <Routes>    
            <Route path="/" element={<Home />} />
              <Route path="/rooms/:id" element={<RoomDetail />} /> 
              <Route path="/clientSpace" element={<ReservationPageClient />} /> 
              <Route path="/reservation/:id" element={<ReservationPage />} /> 
              <Route path="/reservationValidation/:id" element={<ReservationValidation />} /> 
              {/* // TODO: REPARER LA ROUTE CI DESSOUS  */}
              <Route path="/mesReservations/" element={<UserReservations />} />
              <Route path="/connexion/" element={<Connexion />} />
              <Route path="/inscription/" element={<Inscription />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

