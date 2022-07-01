import * as React from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from "react-router-dom";
//MUI IMPORTS ///
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ReservationPage() {

  const navigate = useNavigate();

  let params = useParams()
  let roomId = params.id 

  const [roomReservation, setRoomReservation] = useState([])

    // TODO: CHANGER L'URL DU FETCH PAR LA BASE DE DONNEE MONGO
  fetch('https://jsonplaceholder.typicode.com/posts/{roomId}')
  .then((response) => {
      console.log('API CONNECTED')
      return response.json()
  })
  .then((result) =>{  
      setRoomReservation(result)
      console.log('SET API UPDATE')
      return result
  })

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://lockacademy.com/wp-content/uploads/2020/07/tres-cher-lock-escape-game-lock-academy.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {roomReservation.name} TITRE
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {roomReservation.description} DESCR
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={{
          pathname: `/reservationValidation/${roomReservation._id}`
      }} >
        <Button size="small"> Valider la réservation</Button>
      </Link>
        <Button size="small" onClick={() => navigate(-1)}> Retour</Button>
      </CardActions>
    </Card>
  );
}
