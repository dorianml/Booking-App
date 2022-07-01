import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';

/// import Component ///
import RoomCard from './RoomCard'

const Home = (props) => {

    const [rooms, setRooms] = useState([])

    const getRooms = () => {
        //  TODO: CHANGER L'URL DU FETCH PAR LA BASE DE DONNEE MONGO
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log('API CONNECTED')
            return response.json()
        })
        .then((result) =>{  
            setRooms(result)
            console.log('SET API UPDATE')
            return result
        })
    }

    useEffect(() => {
      getRooms()
        }, [])

    return (
        <Grid className='HomeGridHome' container spacing={2}>
                {rooms.map((room) => {
                    return(
                        <Grid item xs={4}>
                            <RoomCard room={room}/>
                        </Grid>
                    )
                })}
         </Grid>
    )
}

export default Home
