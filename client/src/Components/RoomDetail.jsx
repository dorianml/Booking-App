import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';

//MUI IMPORTS ///
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function RoomDetail() {
    
    let params = useParams()
    let roomId = params.id 
    console.log(params)

    const [roomDetail, setRoomDetail] = useState({})

    const getRoom = () => {
      fetch(`http://localhost:5000/rooms/${roomId}`)
      .then((response) => {
          console.log('API CONNECTED')
          return response.json()
      })
      .then((result) =>{  
          setRoomDetail(result[0])
          console.log('SET API UPDATE')
          console.log(result)
      })
    }

    useEffect(() => {
      getRoom()
    }, [])

    useEffect(() => {
      console.log(`OK` + roomDetail);
    }, [roomDetail])

    return (

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={roomDetail.photo} 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {roomDetail.name} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {roomDetail.description} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {roomDetail.price} $
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Capacity: {roomDetail.capacity} personnes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Age Limit: {roomDetail.ageMin} ans
        </Typography>
        {/* //TODO: SELECT BOX ou CALENDER pour choisir le créneau  */}
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
