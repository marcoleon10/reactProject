import "./home.css";
import Navbar from "../components/navbar";
import { useState, useEffect } from 'react';

function Home(){

    
    return (
        <div className="home">
            <Navbar></Navbar>
            <img className="main-image" src="/images/presentation2.jpg" alt="Speaker" />

        </div>        
    )
}

export default Home;