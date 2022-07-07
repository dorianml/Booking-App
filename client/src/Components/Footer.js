import React from 'react'
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <Link to="/"> 
                    <img className='logoFooter' src="https://escapegamers.fr/wp-content/uploads/2017/09/Logo_Final_Vert_rectangle.png" />
                </Link>
            </div>
        </div>
    )
}

export default Footer 