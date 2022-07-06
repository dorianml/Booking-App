import React from 'react'
import { Link } from "react-router-dom";

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
                     <p> Welcome UserX </p>
                </div>
                <div>
                    <Link to="/UserReservations">
                        <button className='button-inscription'>Mes réservations</button>
                    </Link>
                </div>
                <div>
                    <Link to="/connexion">
                        <button className='button-connection'>Connection</button>
                    </Link>
                </div>
                <div>
                    <Link to="/inscription">
                        <button className='button-inscription'>Inscription</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header 