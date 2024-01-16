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
        data: []
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

  
  const handleExerciseData = (exerciseData, exerciseName) => {
    setExercises(prevExercises => {
      return prevExercises.map(exercise => {
        if (exercise.name === exerciseName) {
          return { ...exercise, data: exerciseData };
        }
        return exercise;
      });
    });
  };

  const completeWorkout = async () => {
    setExercises(exercises)
    console.log(exercises)
  }

  const listExercises = (allExercises) => {
    
  }

  return (
    
    <div className="Current-Workout font-semibold justify-items-center justify-center text-center flex-col space-y-8">
      <h2 className='font-bold text-white'>{day} Workout</h2>
      <div className="exercises w-2/3 justify-items-center justify-center items-center">
        {exercises.map((exercise, index) => (
          <Exercise key={index} exerciseName={exercise.name} onExerciseData={handleExerciseData} />
        ))}
      </div>
      {modalOpen && <Modal enterName={enterName} completed={true}/>}
      
      <button onClick={() => {setModalOpen(true)}}
      className="add-exercise-btn bg-cyan-200 rounded-xl p-2 font-semibold">
        Add Exercise</button>
        <button className="bg-emerald-400 rounded-md p-1" onClick={completeWorkout}>Complete Workout</button>
    </div>
    
  );
}
