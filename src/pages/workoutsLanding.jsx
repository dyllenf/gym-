import React from 'react';
import Exercise from '../Components/Exercise/Exercise.jsx';
import { useNavigate } from 'react-router-dom';

export default function WorkoutLanding({ day, exercises }) {
  const navigate = useNavigate();

  const handleAddExercise = () => {
    navigate('/tracking');
  };

  return (
    
    <div className="flex flex-col items-center justify-between w-full h-screen [#3D3D41] p-4">
    <header className="w-full flex justify-center bg-[#28282B;] py-4">
      
      <h2 className="text-2xl font-bold text-[#7BDEE7] p-1 rounded-sm inline">
        Workouts
      </h2>
    </header>

      <main className="flex-grow flex flex-col items-center justify-start w-full">
        <button 
          onClick={handleAddExercise} 
          className="bg-[#7BDEE7] hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded-md mb-8 mt-4"
        >
          Start a Workout
        </button>

        <div className="flex-grow w-full flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">
            {exercises && exercises.map((exercise, index) => (
              <div key={index} className="bg-gray-500 p-4 rounded-md">
                <p className="font-bold">{exercise.name}</p>
                <p>{exercise.date}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="w-full flex justify-center items-center py-4">
        <button 
          onClick={() => { /*Edit later*/ }} 
          className="bg-[#7BDEE7] hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded-md mb-4"
        >
          View More
        </button>
      </footer>
    </div>
  );
}
