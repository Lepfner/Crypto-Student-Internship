import './App.css';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import {React, useState} from 'react';
import MainMenu from './components/Dashboard';

const App = () => {

  const [address, setAddress] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [auth, setAuth] = useState();

  const submit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        address
      })
    });
    {/*const response = await fetch('http://localhost:3000/api/userAuth', {
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
    });
    const authState = await response.json();
    setAuth(authState.state);
    if (auth) {
      setRedirect (true);
    } else {
      alert (`Neispravan unos podataka!`);
    }
  */}
    setRedirect (true);
  }

  if (redirect){
    return <Router><Route exact path="/dashboard" component={MainMenu}></Route><Redirect to="/dashboard"/></Router>
  }

  return (
    <div>
          <div className="test">
            <div className="fixed top-2/4 left-2/4 bg-white z-50 transform -translate-x-1/2 -translate-y-1/2 w-900 h-500 rounded-6x1 shadow-lg">
              <div className="float-left block w-leftCol h-full">
                <h1 className="text-11x1 font-bold mt-7 pl-login mb-12 text-black">LOGIN</h1>
                <form onSubmit={submit}>
                <div className="border-r border-solid border-primary flex flex-col justify-center items-center">
                  <label className="italic text-black text-7x1 self-start ml-18">Welcome aboard!</label><br/>
                  <input 
                  placeholder="Ethererum wallet address" 
                  required 
                  type="text" 
                  className=" pl-2 h-11 text-7x1 w-88 border-solid border border-primary rounded-4x1 bg-fourth outline-none text-black"
                  onChange={e => {setAddress(e.target.value)}}
                  /><br/>
                  <button type="submit" className="bg-primary border-solid border focus:outline-none rounded-5x1 w-88 h-12 text-white text-7x1">Login</button>
                </div>
              </form>
            </div>
            <div className="float-right block w-rightCol h-full flex flex-col justify-center items-center">
              <img className="h-2/3 w-3/4 animate-pulse duration-1000" src="Ethereum.png" alt=''/>
            </div>
          </div>
        </div>
    </div>  
  );
}

export default App;
