import React, { useState } from 'react';
import Exercise from '../Exercise/Exercise'; 
import { useNavigate } from 'react-router-dom';
import "./workoutStyles.css";
import Modal from '../ModalPopUp/ModalPopUp';

export default function CurrentWorkout({ day }) {
  const navigate = useNavigate();
  const [exercises, setExercises] = useState([]);
  const [exerciseName, setExerciseName] = useState(''); 
  const [modalOpen, setModalOpen] = useState(false)

  const handleAddExercise = () => {
    if (exerciseName) {
      const newExercise = {
        name: exerciseName,
        sets: [] // Assuming you want to start with an empty set array
      };
      setExercises([...exercises, newExercise]);
      setExerciseName(''); // Clear the input after adding an exercise
      setModalOpen(false);
    }
  };

  const enterName = (name) => {
    setExerciseName(name)
    handleAddExercise();
  }

  return (
    
    <div className="Current-Workout w-full ">
      <h2>{day} Workout</h2>
      <div className="exercises w-full">
        {exercises.map((exercise, index) => (
          <Exercise key={index} exerciseName={exercise.name} />
        ))}
      </div>
      {modalOpen && <Modal enterName={enterName}/>}
      
      <button onClick={() => {setModalOpen(true); console.log(modalOpen)}} className="add-exercise-btn">Add Exercise</button>
    </div>
  );
}
