//Components
import '../css/App.css';
import MainMenu from './Dashboard';
//Dependencies
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {React, useState} from 'react';
import { useCookies } from "react-cookie";
import Web3 from 'web3';
import { useEthers, useEtherBalance } from "@usedapp/core";

const Login = () => {
    //Login, cookie, redirect
    const [address, setAddress] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [cookies, setCookie] = useCookies([]);
    //Web3
    let web3 = new Web3("http://127.0.0.1:9545");
    const {activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);
    var ethereum_address = require('ethereum-address');

    function loginHandler(e) {
        var searchTerm = document.getElementById('inputField3').value;
        if (ethereum_address.isAddress(searchTerm)) {
          if (localStorage.getItem(searchTerm) == null) {
            alert (`A new Ethereum address has been created and a value of zero Ether has been added!`);
            localStorage.setItem(searchTerm, 0);
            localStorage.setItem('current', searchTerm);
            setRedirect(true);
            e.preventDefault();
          } else {
            setCookie(address, {
              path: "/"
            });
            activateBrowserWallet();
            web3.eth.personal.getAccounts().then(console.log);
            localStorage.setItem('current', searchTerm);
            setRedirect(true);
            e.preventDefault();
          }
        } else {
          alert (`Invalid ethereum address!`);
          e.preventDefault();
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
                <form onSubmit={loginHandler}>
                  <div className="border-r border-solid border-primary flex flex-col justify-center items-center">
                    <label className="italic text-black text-7x1 self-start ml-18">Welcome aboard!</label><br/>
                    <input
                    id="inputField3"
                    placeholder="Ethererum wallet address" 
                    required 
                    type="text" 
                    className="pl-2 h-11 text-7x1 w-88 border-solid border border-primary rounded-4x1 bg-fourth outline-none text-black"
                    onChange={e => {setAddress(e.target.value)}}/>
                    <br/>
                    <button onClick={loginHandler} type="submit" className="bg-primary border-solid border focus:outline-none rounded-5x1 w-88 h-12 text-white text-7x1">Login with Metamask</button>
                  </div>
                </form>
              </div>
              <div className="float-right w-rightCol h-full flex flex-col justify-center items-center">
                <img className="h-2/3 w-3/4 animate-pulse duration-1000" src="Ethereum.png" alt=''/>
              </div>
            </div>
          </div> 
    )
}

export default Login
