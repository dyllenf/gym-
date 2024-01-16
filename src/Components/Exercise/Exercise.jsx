import React, { useState } from 'react';
import Set from "../Set/Set";
import "./styles.css";
import CompletedSet from "../CompletedSet/CompletedSet"

export default function Exercise( {exerciseName, onExerciseData }) {
  const [sets, setSets] = useState([]);

    const updateSet = (setNumber, newReps, newWeight) => {
        const updatedSets = sets.map((set, index) => {
            if (index === setNumber - 1) {
                return { ...set, reps: newReps, weight: newWeight};
            }
            return set;
        });
        setSets(updatedSets);

        sendExerciseInfo();
    };

    const deleteSet = (set_no) => {
      const newSets = sets.filter((set, idx) => idx+1 !== set_no)
      setSets(newSets)
      sendExerciseInfo()
      console.log(newSets)
      console.log(set_no)
    }

  const addSet = (newSet) => {
    setSets([...sets, newSet]);
    sendExerciseInfo();
  };


  const passExerciseInfo = () => {
    const exerciseInfo = sets.map((set, index) => (
      {
        name: exerciseName,
        reps: set.reps,
        weight: set.weight
      }
    ))

    return exerciseInfo;
  }

  const sendExerciseInfo = () => {
    const exerciseInfo = passExerciseInfo();
    onExerciseData(exerciseInfo, exerciseName);
  };

    return (

        <> 
        <div className="exercise-container rounded-xl w-full h-2/3">
            <div className="exercise-name w-full font-bold p-2 rounded-xl text-center"> {exerciseName}</div>
            <div className="p-2 mt-2 flex justify-evenly w-full font-bold text-center">
                <div className="headers w-1/6">Set</div>
                <div className="headers w-1/3">Previous</div>
                <div className='headers w-1/6'>Reps</div>
                <div className='headers w-1/6'>Weight</div>
                <div className="bg-cyan-400 rounded-md p-1">Enter</div>
            </div>
            {sets.map((set, index) => (
          <CompletedSet key={index} reps={set.reps} weight={set.weight} setNumber={index+1} onUpdate={updateSet} onDelete={deleteSet}/>
        ))}
        <Set onEnter={addSet} setNumber={sets.length + 1} />
        <button className="bg-emerald-400 rounded-md p-1" onClick={() => console.log(JSON.stringify(sets))}>View Sets</button>
        </div>
        
        </>
    );

    
}