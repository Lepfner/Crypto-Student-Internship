import {React, useState} from 'react';
import Explore from './Explore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faWallet, faExchangeAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import Login from './App';
import Modal from './Modal'

function Dashboard({address}) {

     {/*const submit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        address
      })
    });
    const response = await fetch('http://localhost:3000/api/userAuth', {
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
    setRedirect (true);
  } */}

    var x1 = String(address);

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [redirect, setRedirect] = useState(false);

    function eventHandler(){
        const mintAmount = parseInt(document.getElementById('inputField2').value);
        const newAmount = parseInt(localStorage.getItem(x1));
        const Mint = mintAmount + newAmount;
        localStorage.setItem(x1, Mint);
        alert (`Your balance is now ${Mint} Ether!`);
        {/*window.location.reload();*/}
    }

    function eventHandler2(){
        const transferAddress = document.getElementById('inputField4').value;
        const transferAmount = parseInt(document.getElementById('inputField5').value);
        const transferValue = parseInt(localStorage.getItem(transferAddress)) + transferAmount;
        const myNewValue = parseInt(localStorage.getItem(x1)) - transferAmount;
        if (parseInt(localStorage.getItem(x1)) < transferAmount){
            alert (`The amount you are trying to transfer is bigger than the amount on your address!`);
        } else {
            if (localStorage.getItem(transferAddress) === localStorage.getItem(x1)){
                alert (`You can't transfer to your own address! Please try again!`);
            }
            else if (localStorage.getItem(transferAddress) == null) {
                localStorage.setItem(transferAddress, transferAmount);
                alert (`A new Ethereum has been created and the transfer to it has been completed!`);
                localStorage.setItem(x1, myNewValue);
            } else {
            localStorage.setItem(transferAddress, transferValue);
            localStorage.setItem(x1, myNewValue);
            alert (`Transfer succesfull`);
            }
        }
    }

    function logoutHandler() {
      setRedirect(true);
  }

  if (redirect){
    return <Router><Route exact path="/">
        <Login/>
      </Route><Redirect to="/"/></Router>
  }

    return (
        <Router>
            <Switch>
            <Route exact path="/explore" component={Explore}/>
            <div className="test">
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="w-auto h-auto flex flex-col justify-evenly items-center content-around">
                    <p className="text-black mb-10">Your Ether amount: {localStorage.getItem(x1)}</p>
                    <input
                    id="inputField2"
                    type="number"
                    placeholder="Enter amount"
                    className="mb-10 text-center pl-2 h-11 text-7x1 w-88 border-solid border border-primary rounded-4x1 bg-fourth outline-none text-black"
                    maxLength="8"
                    />
                    <button onClick={eventHandler} className="bg-primary border-solid border focus:outline-none rounded-5x1 w-88 h-12 text-white text-7x1">Mint</button>
                </div>
            </Modal>
            <Modal open={isOpen2} onClose={() => setIsOpen2(false)}>
                <div className="w-auto h-auto flex flex-col justify-evenly items-center content-around">
                    <p className="text-black mb-10">Your Ether amount: {localStorage.getItem(x1)}</p>
                    <input
                    id="inputField4"
                    placeholder="Enter address"
                    className="mb-10 text-center pl-2 h-11 text-7x1 w-88 border-solid border border-primary rounded-4x1 bg-fourth outline-none text-black"
                    maxLength="8"
                    />
                    <input
                    id="inputField5"
                    type="number"
                    placeholder="Enter amount"
                    className="mb-10 text-center pl-2 h-11 text-7x1 w-88 border-solid border border-primary rounded-4x1 bg-fourth outline-none text-black"
                    maxLength="8"
                    />
                    <button onClick={eventHandler2} className="bg-primary border-solid border focus:outline-none rounded-5x1 w-88 h-12 text-white text-7x1">Transfer</button>
                </div>
            </Modal>
            <div className="fixed top-2/4 left-2/4 bg-white transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 rounded-6x1 shadow-lg flex flex-col justify-around items-center">
                <div className="h-1/3 w-full flex justify-center items-center">
                    <h1 className="text-10x1 italic text-black">Lepfner's blockchain explorer</h1>
                </div>
                <div className="h-1/3 w-full flex justify-around items-center">
                    <div className="w-3/12 h-full">
                        <Link to="/explore">
                        <button className="wrapper relative text-8x1 italic bg-purple-700 border-solid border focus:outline-none rounded-5x1 w-full h-full hover:text-purple-700 hover:opacity-50 duration-300">Explore<br/>
                        <p className="content text-white absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">Explore addresses and their Ether amount</p>
                        <FontAwesomeIcon icon={faSearch} color="white" className="h-7 wrapper-image"/>
                        </button>
                        </Link>
                    </div>
                    <div className="w-3/12 h-full">
                        <button onClick={() => setIsOpen(true)} className="wrapper relative text-8x1 italic bg-purple-700 border-solid border focus:outline-none rounded-5x1 w-full h-full hover:text-purple-700 hover:opacity-50 duration-300">Mint<br/>
                        <p className="content text-white absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">Add Ether to your address</p>
                        <FontAwesomeIcon icon={faWallet} color="white" className="h-7 wrapper-image"/>
                        </button>
                    </div>
                    <div className="w-3/12 h-full">
                        <button onClick={() => setIsOpen2(true)} className="wrapper relative text-8x1 italic bg-purple-700 border-solid border focus:outline-none rounded-5x1 w-full h-full hover:text-purple-700 hover:opacity-50 duration-300">Transfer<br/>
                        <p className="content text-white absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">Transfer Ether to another address</p>
                        <FontAwesomeIcon icon={faExchangeAlt} color="white" className="h-7 wrapper-image"/>
                        </button>
                    </div>
                </div>
                <div className="h-1/3 w-full">
                    <button onClick={logoutHandler} className="italic absolute top-0 right-0 bg-purple-700 border-solid border focus:outline-none rounded-5x1 w-1/12 h-1/12 mt-2 mr-4">Logout</button>
                </div>
            </div>
            </div>
            </Switch>
        </Router>
        
    )
}

export default Dashboard
