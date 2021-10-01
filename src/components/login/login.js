import React from "react";
import './login.css';
//spotify logo
import logo1 from '../../images/1.png';
//importing login from spotify.
import { LoginURL } from "./spotify";

//WRITE RFCE AND ITLL AUTOMATICALLY WRITE THIS REAL QUICK
//Spotify logo & login
function login() {
    return (
        <div className = "login">

        <img src = {logo1} alt = ""/> 

        <a href = {LoginURL}>Login With Spotify</a>
        </div>
    );
}

export default login;
