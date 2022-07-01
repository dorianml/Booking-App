import * as React from 'react';
import { Link } from "react-router-dom";
//MUI IMPORTS ///
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function RoomCard(props) {
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
          {props.room.name} TITRE
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.room.description} DESCR
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={{
          pathname: `/room/${props.room._id}`
      }} >
        <Button size="small"> + infos</Button>
      </Link>
      <Link to={{
         pathname: `/reservation/${props.room._id}`
         }} >
        <Button size="small"> Reserver</Button>
      </Link>
      </CardActions>
    </Card>
  );
}
