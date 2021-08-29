//Components
import '../css/App.css';
import MainMenu from './Dashboard';
//Dependencies
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {React, useState} from 'react';
import { useCookies } from "react-cookie";
import Web3 from 'web3';

const Login = () => {
    //Login, cookie, redirect
    const [address, setAddress] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [logged, setLogged] = useState(false);
    const [cookies, setCookie] = useCookies([]);
    //Web3
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    
    const loginHandler = async(e) => {
      if(logged){
        setRedirect(true);
      }else{
        setLogged(true);
        e.preventDefault();
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(accounts);
      }
    }

    if (redirect){
        return  <Router><Switch><Route exact path="/dashboard" component={MainMenu}></Route><Redirect to="/dashboard"/></Switch></Router>
      }

    return (
        <div className="test">
            <div className="absolute top-2/4 left-2/4 bg-white z-50 transform -translate-x-1/2 -translate-y-1/2 w-900 h-500 rounded-6x1 shadow-lg">
              <div className="float-left block w-leftCol h-full">
                <h1 className="text-11x1 font-bold mt-7 pl-login mb-12 text-black">LOGIN</h1>
                  <div className="border-r border-solid border-primary flex flex-col justify-center items-center">
                    <label className="italic text-black text-7x1 self-start ml-18">Welcome aboard!</label><br/>
                    <button onClick={loginHandler} type="submit" className="bg-primary border-solid border focus:outline-none rounded-5x1 w-88 h-12 text-white text-7x1 mt-4">Login with Metamask</button><br/>
                    <label className="italic text-white text-7x1 self-start ml-18">Welcome aboard!</label><br/>
                  </div>
              </div>
              <div className="float-right w-rightCol h-full flex flex-col justify-center items-center">
                <img className="h-2/3 w-3/4 animate-pulse duration-1000" src="Ethereum.png" alt=''/>
              </div>
            </div>
          </div> 
    )
}

export default Login
