import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ReservationPage = () => {
  

  const postReservation = () => {
    // TODO: FETCH / METHOD POST / to => Reservation
  }
  // GET PARAMS
  let params = useParams()
  let roomId = params.id
  let slot = params.elt

  const navigate = useNavigate();
  
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
  }, [])

    // State Room
    const [roomReservation, setRoomReservation] = useState({})
  
    // TODO: HANDLECHANGE to make the POST request to RESERVATION

    // const [formReservation, setFormReservation] = useState({
    //   firstName: req.body.firstName, 
    //   lastName: req.body.lastName,
    //   slot: slot,
    //   room_id: req.params.id,
    //   nbPlayer: req.body.nbPlayer
    // })

    // const handleChange = (e) => {
    //   setFormReservation(e.currentTarget.value)
    // }

  const theme = createTheme();
    
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  let PlayersNbTab = [3]

  function capacitySelectBox() {
    for ( let i = 3; i <= roomReservation.capacity; i++ ) {
      PlayersNbTab.push(i + 1)
    } return
  }
  capacitySelectBox()

  return (
    <>
    <div className='titleBox'>
    <h1 className='titleReservation'> Réservation: {roomReservation.name} </h1>
    </div>
    <div className='ticketReservation'>
      <div className='imageReservation'>
        <img width="500" src={roomReservation.photo}/>
      </div>
      <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
           
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <InputLabel id="demo-simple-select-standard-label">Nombre de participants</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            // TODO:SELECT VALUE TO DEBUG
            // value={nbPlayers}
            // onChange={handleChange}
            label="Nb de Participant"
          >
            <MenuItem value="">
            </MenuItem>
            {PlayersNbTab.map((nbPlayers) => {
              return(
                <MenuItem value={nbPlayers}>{nbPlayers}</MenuItem>
              )
            })}
          </Select>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="First Name"
                name="name"
                autoFocus$
                // TODO: ONCHANGE TO DEBUG under 
                // onChange={onChangeUserName}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Last Name"
                name="name"
                autoFocus
                // TODO: ONCHANGE TO DEBUG under
                // onChange={onChangeUserName}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="age"
                label="Age"
                type="text"
                id="age"
                // TODO: ONCHANGE TO DEBUG under
                // onChange={onChangeUserEmail}
              />
            
              <Button
              // TODO: OnClick Function that POST the Form
                onClick={postReservation()}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Réserver
              </Button>
          
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      </div>
    </div>
    </>
  );
}

export default ReservationPage






