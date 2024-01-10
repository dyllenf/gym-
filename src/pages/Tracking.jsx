"use client"

import { useState } from 'react';
import Exercise from '../Components/Exercise/Exercise';
import CurrentWorkout from '../Components/Workout/CurrentWorkout ';




export const Tracking = () => {

    return (
        <div className="w-5/6 h-3/4 border-4 border-black">
            <CurrentWorkout day={"Chest Day"}/>
        </div>
       
        
    )
    
}