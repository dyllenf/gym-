import React, { useState } from 'react';
import Set from "../Set/Set";
import "./styles.css";
import CompletedSet from "../CompletedSet/CompletedSet"

export default function Exercise( {exerciseName}) {
  const [sets, setSets] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

    const updateSet = (setNumber, newReps, newWeight) => {
        const updatedSets = sets.map((set, index) => {
            if (index === setNumber - 1) {
                return { ...set, reps: newReps, weight: newWeight };
            }
            return set;
        });
        setSets(updatedSets);
    };

    const deleteSet = (set_no) => {
      const newSets = sets.filter((set, idx) => idx+1 !== set_no)
      setSets(newSets)
      console.log(newSets)
      console.log(set_no)
    }

  const addSet = (newSet) => {
    setSets([...sets, newSet]);
  };

  const completeExercise = () => {
    setIsCompleted(true);
  }

    return (
      <>
      {isCompleted ? (
        <div className="exercise-container rounded-xl w-1/2 h-2/3 ">
            <div className="exercise-name w-full font-bold p-2 rounded-xl text-center"> {exerciseName}</div>
            <div className="p-2 mt-2 flex justify-evenly w-full font-bold text-center">
                <div className="headers w-1/6">Set</div>
                <div className="headers w-1/3">Previous</div>
                <div className='headers w-1/6'>Reps</div>
                <div className='headers w-1/6'>Weight</div>
                {/* <div className="bg-cyan-400 rounded-md p-1">Enter</div> */}
            </div>
            {sets.map((set, index) => (
        <CompletedSet reps={set.reps} weight={set.weight} setNumber={index+1} onUpdate={null} onDelete={null} completed={true}/>
      ))}
        </div>
      )
        :
        (
        <> 
        <div className="exercise-container rounded-xl w-1/2 h-2/3">
            <div className="exercise-name w-full font-bold p-2 rounded-xl text-center"> {exerciseName}</div>
            <div className="p-2 mt-2 flex justify-evenly w-full font-bold text-center">
                <div className="headers w-1/6">Set</div>
                <div className="headers w-1/3">Previous</div>
                <div className='headers w-1/6'>Reps</div>
                <div className='headers w-1/6'>Weight</div>
                <div className="bg-cyan-400 rounded-md p-1">Enter</div>
            </div>
            {sets.map((set, index) => (
          <CompletedSet reps={set.reps} weight={set.weight} setNumber={index+1} onUpdate={updateSet} onDelete={deleteSet} completed={false}/>
        ))}
        <Set onEnter={addSet} setNumber={sets.length + 1} />
        {/* <button className="bg-emerald-400 rounded-md p-1" onClick={completeExercise}>Complete Workout</button> */}
        </div>
        
        </>
        )
      }
      </>
        
    );

    
}