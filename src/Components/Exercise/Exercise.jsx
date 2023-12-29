import React, { useState } from 'react';
import Set from "../Set/Set";
import "./styles.css";
import CompletedSet from "../CompletedSet/CompletedSet"

export default function Exercise( {exerciseName}) {
  const [sets, setSets] = useState([]);

    const updateSet = (setNumber, newReps, newWeight) => {
        const updatedSets = sets.map((set, index) => {
            if (index === setNumber - 1) {
                return { ...set, reps: newReps, weight: newWeight };
            }
            return set;
        });
        setSets(updatedSets);
    };

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
        <CompletedSet reps={set.reps} weight={set.weight} setNumber={index+1} onUpdate={updateSet}/>
      ))}
      <Set onEnter={addSet} setNumber={sets.length + 1} />

        </div>
    );

    
}