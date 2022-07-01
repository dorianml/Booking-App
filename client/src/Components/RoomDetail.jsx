import React, {useState} from 'react';
import { useParams, Link } from 'react-router-dom';

//MUI IMPORTS ///
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



/// USE PARAMS ////


export default function RoomDetail() {
    
    
    let params = useParams()
    let roomId = params.id 

    const [roomDetail, setRoomDetail] = useState([])

      // TODO: CHANGER L'URL DU FETCH PAR LA BASE DE DONNEE MONGO
    fetch('https://jsonplaceholder.typicode.com/posts/{roomId}')
    .then((response) => {
        console.log('API CONNECTED')
        return response.json()
    })
    .then((result) =>{  
        setRoomDetail(result)
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
          {roomDetail.name} TITRE
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {roomDetail.description} DESCR
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {roomDetail.price} Prix: 200$
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {roomDetail.capacity} Capacity: 5/7 personnes
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {roomDetail.capacity} Age Limit: 18 ans
        </Typography>
        //TODO: SELECT BOX ou CALENDER pour choisir le créneau 
      </CardContent>
      <CardActions>

      <Link to={{
        pathname: `/reservation/${roomDetail._id}`
      }} >
        <Button size="small"> Reserver</Button>
      </Link>
      <Link to={{
        pathname: `/`
      }} >
        <Button size="small"> Retour</Button>
      </Link>
      
      </CardActions>
    </Card>
  );
}
