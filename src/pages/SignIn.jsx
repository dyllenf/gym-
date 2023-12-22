"use client"

import { useState } from 'react';




export const SignIn = () => {

    return (
        <div className='Main'>
        <div className='mainContainer'>
        <div className='card'>
            <h2 className='title'>Create An Account</h2>
            <p className='description'>Create an account and start working out today!</p>
            <form className='signUp'>
            <input className='input' type='email' placeholder='Email Address' />
            <input className='input' type='password' placeholder='Password' />
            <button className='button' type='submit'>Create Account</button>
            </form>
            <div className='signIn'>
            Already Have An Account! <a href="/signin" className='link'>Sign In</a>
            </div>
        </div>
        </div>
    </div>
    )
    
}