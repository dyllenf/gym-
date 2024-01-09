import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';


const liftingStyles = {
    'Calisthenics': 1,
    'Powerlifting': 2,
    'Bodybuilding': 3,
    'Athletic Training': 4,
};

const CreateAccount = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(''); 
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        yearsOfLifting: '',
        styleOfLifting: '',
        trainingDaysPerWeek: '',
        desiredWorkoutLength: '',
        password: '',
        passwordCheck: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Prepare the submission data
        let submissionData = { ...formData};
    
        // Convert styleOfLifting to numeric value if it exists in liftingStyles
        if (formData.styleOfLifting in liftingStyles) {
            submissionData.styleOfLifting = liftingStyles[formData.styleOfLifting];
        }
       
        try {
            const response = await fetch(' localhost:4000/api/register', { // replace with your actual registration endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(submissionData)
            });

            if (response.ok) {
                navigate('/landing');

            } else {
                const errorData = await response.json(); 
                setErrorMessage(errorData.err);
            }
        } catch (error) {
            setErrorMessage('Account could not be created. Please try again.');
        }
    };


    return (
        <div className="min-h-screen flex justify-center items-center ">
        <div className="p-4 md:p-8 rounded-lg shadow-md max-w-md w-full bg-[#28282B]">
        <h1 className="text-xl font-bold text-[#7BDEE7] border-b-4 border-[#28282B]">Create your account</h1>
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

                <button type="submit" className="bg-[#7BDEE7] text-grey rounded-md p-1" onClick={handleSubmit}>Enter</button>


            </form>
        
            </div>
           
    </div>
    );
};

export default CreateAccount;

