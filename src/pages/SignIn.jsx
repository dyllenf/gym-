import { useState } from 'react';
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
            const response = await fetch('localhost:4000/api/login', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                navigate('/landing');
            } else {
                const errorData = await response.json();
                setError(errorData.error || 'Invalid email or password.'); 
            }
        } catch (error) {
            setError('An error occurred during sign-in. Please try again.');
        }
    };

    return (
        <div className='Main'>
            <div className='mainContainer'>
                <div className='card'>
                    <p className='description'>Welcome Back!</p>
                    <form className='signUp' onSubmit={handleSubmit}>
                        <input className='input' type='email' placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)} />
                        <input className='input' type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                        <button className='button' type='submit'>Sign In</button>
                    </form>
                    {error && <div className='error-message'>{error}</div>}
                    <p className='description'>Don't have an account? Sign up now!</p>
                    <button className='button' onClick={() => navigate('/create-account')}>Create Account</button>
                </div>
            </div>
        </div>
    );
};
