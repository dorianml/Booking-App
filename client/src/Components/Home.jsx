import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';

/// import Component ///
import RoomCard from './RoomCard'

const Home = () => {

    const [rooms, setRooms] = useState([])

    const getRooms = () => {
        fetch(`http://localhost:5000/rooms`)
        .then((response) => {
            console.log('API CONNECTED')
            return response.json()
        })
        .then((result) => {  
            setRooms(result)
            console.log('SET API UPDATE')
            return result
        })
    }

    useEffect(() => {
      getRooms()
        }, [])

    return (
        <>
        <h2 className='titleHome'> Toutes nos salles de jeu</h2>
        <Grid className='HomeGridHome' container spacing={0} margin-bottom={40}>
                {rooms.map((room) => {
                    return(
                        <Grid item xs={4} >
                            <RoomCard room={room}/>
                        </Grid>
                    )
                })}
         </Grid>
         </>
        
    )
}

export default Home
