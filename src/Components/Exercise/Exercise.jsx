"use client"

import { useState } from 'react';
import "./styles.css"

export default function Exercise({exerciseName}){

    return (
        <div className="exercise-container w-1/2 h-2/3 ">
            <div className="exercise-name w-11/12">{exerciseName}</div>
        </div>
    );

    
}