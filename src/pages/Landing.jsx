"use client"

import { useState } from 'react';
import { Link } from 'react-router-dom';





export const Landing = () => {

    return (
        // Somewhere in your component
        <div>
            <Link to="/login">Login</Link>
            <Link to="/tracking">Workout</Link>

           

           
        </div>
        
        
    )
    
}