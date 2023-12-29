import React, { useState } from 'react';

export default function Set({ onEnter, setNumber }) {
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onEnter({ reps, weight });
    setReps('');
    setWeight('');
  };

  return (
    <form className="p-2 mt-2 flex justify-evenly w-full font-bold text-center " onSubmit={handleSubmit}>
      <div className="headers w-1/6">{setNumber}</div>
      <div className="headers w-1/3"></div>
      <input
        className="headers w-1/6 text-center"
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <input
        className='headers w-1/6 text-center'
        type="number"
        placeholder="Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button 
      className="bg-cyan-400 rounded-md p-1"
      type="submit">Enter</button>
    </form>
  );
}

