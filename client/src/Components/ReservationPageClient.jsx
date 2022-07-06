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
  
  // GET PARAMS
  let params = useParams()
  let roomId = params.id
  console.log(params)

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
  
    const [userFirstName, setUserFirstName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userLastName, setUserLastName] = useState("")
    const [nbPlayers, setNbPlayers] = useState([])

  
    const onChangeUserName = (e) => {
      setUserFirstName(e.currentTarget.value)
    }
    const onChangeUserEmail = (e) => {
      setUserEmail(e.currentTarget.value)
    }

    const handleChangeNbPlayers = (e) => {
      setNbPlayers(e.currentTarget.value)
    }

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
         <img width="500" src={roomReservation.photo}/>
          <Typography component="h1" variant="h5">
            Enter {roomReservation.name} now !
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <InputLabel id="demo-simple-select-standard-label">Nombre de participants</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={nbPlayers}
          onChange={handleChangeNbPlayers}
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
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onChangeUserName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Last Name"
              name="name"
              autoComplete="email"
              autoFocus
              onChange={onChangeUserName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onChangeUserEmail}
            />
          
            <Button
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
  );
}

export default ReservationPage






