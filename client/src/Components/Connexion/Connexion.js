import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function ReservationPage() {
  
  const [userFirstName, setUserFirstName] = useState("")
  const [userLastName, setUserLastName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [userConfirmationPassword, setUserConfirmationPassword] = useState("")

  const onChangeUserFirstName = (e) => {
    setUserFirstName(e.currentTarget.value)
  }
  const onChangeUserLastName = (e) => {
    setUserLastName(e.currentTarget.value)
  }
  const onChangeUserEmail = (e) => {
    setUserEmail(e.currentTarget.value)
  }
  const onChangeUserPassword = (e) => {
    setUserPassword(e.currentTarget.value)
  }
  const onChangeUserConfirmationPassword = (e) => {
    setUserConfirmationPassword(e.currentTarget.value)
  }

return (
    <>
      <form action="" method="get" className="form-reservation">
      <h4>Join the Adventure now!</h4>
      <div className="form-example">
        <label>First Name: </label>
         <input type="text" name="name" id="name" required onChange={onChangeUserFirstName}  /> 
      </div>
      <div className="form-example">
        <label>Last Name: </label>
         <input type="text" name="name" id="name" required onChange={onChangeUserLastName}  /> 
      </div>
      <div className="form-example">
        <label >Email: </label>
        <input type="email" name="email" id="email" required onChange={onChangeUserEmail} /> 
      </div>
      <div className="form-example">
        <label >Password: </label>
        <input type="email" name="email" id="email" required onChange={onChangeUserPassword} /> 
      </div>
      <div className="form-example">
        <label >Confirm Password: </label>
        <input type="email" name="email" id="email" required onChange={onChangeUserConfirmationPassword} /> 
      </div>
      <div className="form-example">
        <input type="submit" value="Subscribe!" />
      </div>
      </form>
    </>
  );
}
