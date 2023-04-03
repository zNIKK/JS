import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../context/contextLogin.js';
import Auth from './AuthButton.js';
import StyledNav from "./StyledNav.js";
export default function Nav () {
    const {state} = useContext(Context);
    const history = useNavigate();
    
    useEffect(() => {
        if(state) {
            history('/');
        }
    }, [state])
    return (
        <StyledNav>
            <h2>
                <Link to="/">NIKK</Link>
            </h2>
            <ul>
                <li><Auth /></li>
                <li>
                    <Link to="/aulas">Aulas</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
            </ul>
        </StyledNav>
    );
}