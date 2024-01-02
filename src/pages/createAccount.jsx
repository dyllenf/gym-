import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        // Handle the form submission logic here
    };

    return (
        <div>
            <h1>Create Your Workout Account</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                /><br/>

                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                /><br/>

                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                /><br/>

                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                /><br/>

                <input
                    type="number"
                    name="yearsOfLifting"
                    placeholder="Years of Lifting Experience"
                    value={formData.yearsOfLifting}
                    onChange={handleChange}
                /><br/>

                <select 
                    name="styleOfLifting" 
                    value={formData.styleOfLifting}
                    onChange={handleChange}
                >
                    <option value="">Select Style of Lifting</option>
                    <option value="Calisthenics">Calisthenics</option>
                    <option value="Powerlifting">Powerlifting</option>
                    <option value="Bodybuilding">Bodybuilding</option>
                    <option value="Athletic Training">Athletic Training</option>
                </select><br/>

                <select 
                    name="trainingDaysPerWeek" 
                    value={formData.trainingDaysPerWeek}
                    onChange={handleChange}
                >
                    <option value="">Select Training Days Per Week</option>
                    <option value="1">1 Day </option>
                    <option value="2">2 Days </option>
                    <option value="3">3 Days </option>
                    <option value="4">4 Days </option>
                    <option value="5">5 Days </option>
                    <option value="6">6 Days </option>
                    <option value="7">7 Days </option>
                </select><br/>


                <input
                    type="text"
                    name="desiredWorkoutLength"
                    placeholder="Desired Workout Length"
                    value={formData.desiredWorkoutLength}
                    onChange={handleChange}
                /><br/>

                <button type="submit">Create Account</button>
            </form>
        </div>
    );
};

export default CreateAccount;
