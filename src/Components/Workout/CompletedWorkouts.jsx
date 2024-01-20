import React from 'react';
import Exercise from '../Exercise/Exercise'; 
import { useNavigate } from 'react-router-dom';
import "./workoutStyles.css";

export default function CompletedWorkouts({ day, exercises }) {
  const navigate = useNavigate();

  const handleAddExercise = () => {
    navigate('src/Components/Exercise/Exercise.jsx'); // NEED TO DISCUSS HOW WE WANNA APPROACH
  };

  //Make These Changes


  return (
    <div className="Current-Workout">
      <h2>{day} Workout</h2>
      <div className="exercises">
        {exercises.map((exercise, index) => (
          <Exercise key={index} name={exercise.name} details={exercise.details} />
        ))}
      </div>
      <button onClick={handleAddExercise} className="add-exercise-btn">Add Exercise</button>
    </div>
  );
}
