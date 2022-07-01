import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='navbar'>

            <div className='home-logo'>
                <Link to="/"> 
                    HOME
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
                    <Link to="/connection">
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