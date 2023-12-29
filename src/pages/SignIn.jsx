import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        try {
            // Send request to backend to check if email exists
            const response = await axios.post('/api/check-email', { email });
            if (response.data.exists) {
                setError('Account with this email already exists.');
            } else {
                // Proceed with account creation
            }
        } catch (error) {
            setError('An error occurred while checking the account.');
        }
    };

    const handleCreateAccountClick = () => {
        navigate('/createAccount'); 
    };

    const handleSignInClick = () => {
        navigate('/Landing');
        
    }

    return (
        <div className='Main'>
            <div className='mainContainer'>
                <div className='card'>
                    <p className='description'>Welcome Back!</p>
                    <form className='signUp' onSubmit={handleSubmit}>
                        <input className='input' type='email' placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)} />
                        <input className='input' type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                        <button className='button' onClick={handleSignInClick}>Sign In</button>
                    </form>
                    <p className='description'>Don't have an account? Sign up now!</p>
                    <button className='button' onClick={handleCreateAccountClick}>Create Account</button>
                </div>
            </div>
        </div>
    );
};
