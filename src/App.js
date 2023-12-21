import logo from './logo.svg';
import './App.css';

function App() {
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

    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
