import React, { useState } from 'react';
import "./styles.css"

export default function Modal( {enterName} ) {

    
    const [exerciseName, setExerciseName] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        enterName(exerciseName); // Call the enterName function with the exerciseName
        setExerciseName(""); // Reset the input field after submission
    };
   return (
    <>
      <div className="Overlay_Styles"></div>
        <div  className="Modal_Styles justify-evenly text-cyan-400 font-semibold">
        <div className="text-4xl">Enter Exercise Name</div>
        <input
            type="text"
            placeholder="Enter Exercise Name"
            value={exerciseName}
            onChange={e => setExerciseName(e.target.value)}
        />
        <button type="submit" className="bg-white" onClick={handleSubmit}>Enter</button>
      </div>
    </>
   )
    
}

