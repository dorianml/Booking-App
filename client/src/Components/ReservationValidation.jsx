import React, {useParams, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
//MUI IMPORTS ///
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ReservationValidation() {

  const navigate = useNavigate();

  let params = useParams()
  let roomId = params.id 

  const [validation, setValidation] = useState([])


  // TODO: UTILISER LES PARAMS ID POUR EXTRAIRE LES INFOS DE LA BASE DE DONNEE
  fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((response) => {
      console.log('API CONNECTED')
      return response.json()
  })
  .then((result) =>{  
      setValidation(result)
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
        {validation.name} MERCI POUR LA VALIDATION 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {validation.description} A bientot 
        </Typography>
        </CardContent>
        <CardActions>

        <Link to={{
            pathname: `/mesReservations`
        }} >
            <Button size="small"> Voir mes réservations</Button>
        </Link>
        <Link to={'/'}>
            <Button size="small" > Menu Principal</Button>
        </Link>

      </CardActions>
    </Card>
  );
}
