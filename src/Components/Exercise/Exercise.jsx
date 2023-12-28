import React, { useState } from 'react';
import Set from "../Set/Set";
import "./styles.css"

export default function Exercise( {exerciseName}) {
  const [sets, setSets] = useState([]);

  const addSet = (newSet) => {
    setSets([...sets, newSet]);
  };
    return (
        <div className="exercise-container rounded-xl w-1/2 h-2/3 ">
            <div className="exercise-name w-11/12 rounded-xl">{exerciseName}</div>
            <div className="p-2 mt-2 flex justify-evenly w-full font-bold text-center">
                <div className="headers w-1/6">Set</div>
                <div className="headers w-1/3">Previous</div>
                <div className='headers w-1/6'>Reps</div>
                <div className='headers w-1/6'>Weight</div>
                <div>Enter</div>
            </div>
            {sets.map((set, index) => (
        <div key={index}>
          <div>Set {index + 1}</div>
          <div>{set.reps}</div>
          <div>{set.weight}</div>
        </div>
      ))}
      <Set onEnter={addSet} />

        </div>
    );

    
}