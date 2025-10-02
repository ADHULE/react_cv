import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notfound'>
            <div className='notfountContent' >
            <h1>Désolé cette page n'existe pas!</h1>
            <div className='content'>
                <NavLink exact to ="/" >
                <li className='fas fa-home' ></li>
                <span>Accueil</span>
                </NavLink>

            </div>
                

            </div>
        </div>
    );
};

export default NotFound;