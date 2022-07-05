import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function ReservationPage() {
  
  // GET PARAMS
  let params = useParams()
  let roomId = params.id
  console.log(params)

  const navigate = useNavigate();
// State 
  const [roomReservation, setRoomReservation] = useState({})

  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")

  // TODO: GET THOSE Value Out of this component
  const onChangeUserName = (e) => {
    setUserName(e.currentTarget.value)
  }
  const onChangeUserEmail = (e) => {
    setUserEmail(e.currentTarget.value)
  }

  const getReservationForm = () => {
    // Fetching on Mongo DB "rooms" database
    fetch(`http://localhost:5000/rooms/${roomId}`)
    .then((response) => {
        console.log('API CONNECTED')
        return response.json()
    })
    .then((result) =>{  
        setRoomReservation(result[0])
        console.log('SET API UPDATE')
        return result
    })
  }

  useEffect(() => {
    getReservationForm()
  }, [roomReservation])

  return (
    <>
    <div className='reservationImage'>
      <img  src={roomReservation.photo}/>
    </div>
      <form action="" method="get" className="form-reservation">
      <h4 className='text'>Book the room {roomReservation.name}</h4>
      <div className="form-example">
        <label className='text'>Enter your name: </label>
         <input type="text" name="name" id="name" required onChange={onChangeUserName}  /> 
      </div>
      <div className="form-example">
        <label className='text'>Enter your email: </label>
        <input type="email" name="email" id="email" required onChange={onChangeUserEmail} /> 
      </div>
      <div className="form-example">
        <input type="submit" value="Subscribe!" />
      </div>
      </form>
    </>
  );
}
