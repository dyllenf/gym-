import React, { useState } from 'react';
import '/Users/sn/Extra/GymTracker/gym-buddy/src/App.css';

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        yearsOfLifting: '',
        styleOfLifting: '',
        trainingDaysPerWeek: '',
        desiredWorkoutLength: ''
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Add form submission logic here
    };

    return (
        
        <div className="flex justify-center items-center min-h-screen bg-custom-gray">
            <div className="p-8 rounded-lg shadow-md max-w-lg w-full">
                <h1 className="text-2xl text-custom-text mb-6">Create Your Workout Account</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-2 rounded-md border border-gray-300"
                    />

                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="p-2 rounded-md border border-gray-300"
                    />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="p-2 rounded-md border border-slate-200 border-4"
                    />

                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="p-2 rounded-md border border-gray-300"
                    />

                    <input
                        type="number"
                        name="yearsOfLifting"
                        placeholder="Years of Lifting Experience"
                        value={formData.yearsOfLifting}
                        onChange={handleChange}
                        className="p-2 rounded-md border border-gray-300"
                    />

                    <select 
                        name="styleOfLifting" 
                        value={formData.styleOfLifting}
                        onChange={handleChange}
                        className="p-2 rounded-md border border-gray-300 bg-white"
                    >
                        <option value="">Select Style of Lifting</option>
                            <option value="Calisthenics">Calisthenics</option>
                            <option value="Powerlifting">Powerlifting</option>
                            <option value="Bodybuilding">Bodybuilding</option>
                            <option value="Athletic Training">Athletic Training</option>
                    </select>

                    <select 
                        name="trainingDaysPerWeek" 
                        value={formData.trainingDaysPerWeek}
                        onChange={handleChange}
                        className="p-2 rounded-md border border-gray-300 bg-white"
                    >
                        <option value="">Select Training Days Per Week</option>
                            <option value="1">1 Day </option>
                            <option value="2">2 Days </option>
                            <option value="3">3 Days </option>
                            <option value="4">4 Days </option>
                            <option value="5">5 Days </option>
                            <option value="6">6 Days </option>
                            <option value="7">7 Days </option>
                    </select>

                    <input
                        type="text"
                        name="desiredWorkoutLength"
                        placeholder="Desired Workout Length"
                        value={formData.desiredWorkoutLength}
                        onChange={handleChange}
                        className="p-2 rounded-md border border-gray-300"
                    />

                <button type="submit" className="mt-4 bg-custom-blue text-custom-gray p-3 rounded-md hover:bg-custom-blue hover:text-custom-gray w-full">                        Create Account
                    </button>
                </form>
            </div>    
        </div>
       
    );
};

export default CreateAccount;
