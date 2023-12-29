import React, { useState } from 'react';

export default function Set({ reps, weight, setNumber, onUpdate }) {

    const [editMode, setEditMode] = useState(false);
    const [currentReps, setCurrentReps] = useState(reps);
    const [currentWeight, setCurrentWeight] = useState(weight)

    
    const handleModeChange = () => {
        setEditMode(!editMode)
    }

    const handleInputChange = (event, type) => {
        const value = event.target.value;
        if (type === 0){
            setCurrentReps(value)
        }
        else if (type === 1){
            setCurrentWeight(value)
        }
    }

    const handleSubmit = () => {
        onUpdate(setNumber, currentReps, currentWeight);
        handleModeChange();
    }

    return (
        <div className="p-2 mt-2 flex justify-evenly w-full font-bold text-center">
            <div className="headers w-1/6">{setNumber}</div>
            <div className="headers w-1/3"></div>
            
            {editMode ? (
            <>
            <input
             className="headers w-1/6 text-center"
             type="number"
             placeholder="Reps"
             value={currentReps}
             onChange={(e) => handleInputChange(e, 0)}
             
           />
           <input
             className='headers w-1/6 text-center'
             type="number"
             placeholder="Weight"
             value={currentWeight}
             onChange={(e) => handleInputChange(e, 1)}
           />
           <button type="submit" onClick={handleSubmit}>Enter</button></>
            ) : (
            <>
            <div className='headers w-1/6'>{currentReps}</div>
            <div className='headers w-1/6'>{currentWeight}</div>
            <button onClick={handleModeChange}> Edit </button>
            </>
            )
             
        }
            
        </div>
    );
}

