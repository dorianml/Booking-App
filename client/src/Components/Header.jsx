import React from 'react'
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";


const Header = () => {
    return (
        <div className='navbar'>

            <div className='home-logo'>
                <Link to="/"> 
                    <img className='logoHome' src="https://escapegamers.fr/wp-content/uploads/2017/09/Logo_Final_Vert_rectangle.png" />
                </Link>
            </div>

            <div className='nav-log-section'>
                <div>
                     <p> </p>
                </div>
                <div>
                    <Link className='button-navbar' to="/inscription">
                    <Button sx={{ color: '#81c784'}} variant="outlined">
                       Inscritption
                      </Button>
                    </Link>
                </div>
                <div>
                    <Link className='button-navbar' to="/connexion">
                        <Button  variant="contained">
                       Connexion
                      </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header 