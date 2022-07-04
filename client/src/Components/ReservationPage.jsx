import * as React from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function ReservationPage() {
  
  // GET PARAMS
  let params = useParams()
  let roomId = params.id 
  
  const navigate = useNavigate();

  const [roomReservation, setRoomReservation] = useState([])

  // TODO: MAKE THE HANDLECHANGE ON FORM ENTRIES

    // TODO: Créer la connection MongoDB
  fetch(`http://localhost:5000/${roomId}`)
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
    <>
      <form action="" method="get" class="form-reservation">
      <h4>Join the room ${roomId} now!</h4>
      <div className="form-example">
        <label for="name">Enter your name: </label>
        <input type="text" name="name" id="name" required />
      </div>
      <div className="form-example">
        <label for="email">Enter your email: </label>
        <input type="email" name="email" id="email" required />
      </div>
      <div className="form-example">
        <input type="submit" value="Subscribe!" />
      </div>
      </form>
    </>
    );
  }


// <ThemeProvider>
// <Container component="main" maxWidth="xs">
//   <CssBaseline />
//   <Box
//     sx={{
//       marginTop: 8,
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     }}
//   >
//     <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//       <LockOutlinedIcon />
//     </Avatar>
//     <Typography component="h1" variant="h5">
//       Sign in
//     </Typography>
//     <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         id="email"
//         label="Email Address"
//         name="email"
//         autoComplete="email"
//         autoFocus
//       />
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         name="password"
//         label="Password"
//         type="password"
//         id="password"
//         autoComplete="current-password"
//       />
//       <FormControlLabel
//         control={<Checkbox value="remember" color="primary" />}
//         label="Remember me"
//       />
//       <Button
//         type="submit"
//         fullWidth
//         variant="contained"
//         sx={{ mt: 3, mb: 2 }}
//       >
//         Sign In
//       </Button>
//       <Grid container>
//         <Grid item xs>
//           <Link href="#" variant="body2">
//             Forgot password?
//           </Link>
//         </Grid>
//         <Grid item>
//           <Link href="#" variant="body2">
//             {"Don't have an account? Sign Up"}
//           </Link>
//         </Grid>
//       </Grid>
//     </Box>
//   </Box>
//   <Typography gutterBottom variant="h5" component="div">
//             {roomReservation.name} TITRE
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//           {roomReservation.description} DESCR
//           </Typography>
//   <Link to={{
//     pathname: `/reservationValidation/${roomReservation._id}`
//   }} >
//   <Button size="small"> Valider la réservation</Button>
//   </Link>
//   <Button size="small" onClick={() => navigate(-1)}> Retour</Button>
// </Container>
// </ThemeProvider>