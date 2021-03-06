import * as React from 'react';
import { Link } from "react-router-dom";
//MUI IMPORTS ///
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


export default function RoomCard(props) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt="escape preview"
        height="140"
        image={props.room.photo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.room.name} 
        </Typography>
      </CardContent>
      <CardActions>
      <Link className='iconeButton' to={{
        // LINKS TO RoomDetail Component
          pathname: `/rooms/${props.room._id}`
      }} >
        <Button  color='primary' size="small"> + infos </Button>
      </Link>

      </CardActions>
    </Card>
  );
}
