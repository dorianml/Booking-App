import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Inscription() {
  
  const navigate = useNavigate()

  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    email: "",
    password: "", 
    isAdmin: false
  })

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value}
    })
  }

  async function onSubmit(e) {
    e.preventDefault()

    const newUser = { ...form}

    await fetch("http;//localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser),
      });

      setForm({ email: "", password: "", firstName: "", lastName: "" })
      navigate("/clientSpace")
    }

return (
    <>
      <form action="" method="get" className="form-reservation">
      <h4>Join the Adventure now!</h4>
      <div className="form-example">
        <label>First Name: </label>
         <input type="text" name="name" id="name" required onChange={(e)=>updateForm({firstName: e.target.value})}  /> 
      </div>
      <div className="form-example">
        <label>Last Name: </label>
         <input type="text" name="name" id="name" required  onChange={(e)=>updateForm({lastName: e.target.value})} /> 
      </div>
      <div className="form-example">
        <label >Email: </label>
        <input type="email" name="email" id="email" required onChange={(e)=>updateForm({email: e.target.value})} /> 
      </div>
      <div className="form-example">
        <label >Password: </label>
        <input type="email" name="email" id="email" required onChange={(e)=>updateForm({password: e.target.value})} /> 
      </div>
      <div className="form-example">
        <input type="submit" value="Subscribe!" onClick={onSubmit} />
      </div>
      </form>
    </>
  );
}
