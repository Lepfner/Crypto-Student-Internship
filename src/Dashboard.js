import {React, useState} from 'react';
import Explore from './Explore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faWallet, faExchangeAlt} from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import Login from './App';
import Modal from './Modal'

function Dashboard() {

    const [myalert, setMyAlert] = useState('');
    const [myalert2, setMyAlert2] = useState('');
    const [myValue, setMyValue] = useState(localStorage.getItem(localStorage.getItem('current')));
    const [myValue2, setMyValue2] = useState();

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [redirect, setRedirect] = useState(false);

    var ethereum_address = require('ethereum-address');

    function mintHandler(e){
        const mintAmount = parseInt(document.getElementById('inputField2').value);
        const currentAmount = parseInt(localStorage.getItem(String(localStorage.getItem('current'))));
        const Mint = mintAmount + currentAmount;
        var searchTerm = document.getElementById('inputField2').value.trim();
        if(!searchTerm || mintAmount <= 0){
            setMyAlert('Please enter a valid amount!');
            e.preventDefault();
        } else {
            localStorage.setItem(String(localStorage.getItem('current')), Mint);
            e.preventDefault();
            setMyValue(Mint);
        }
        {/*window.location.reload();*/}
    }

    function transferHandler(e){
        const transferAddress = document.getElementById('inputField4').value;

        const transferAmount = parseInt(document.getElementById('inputField5').value);
        var checkAmount = document.getElementById('inputField5').value.trim();
        
        const transferValue = parseInt(localStorage.getItem(transferAddress)) + transferAmount;
        const NewValue = parseInt(localStorage.getItem(String(localStorage.getItem('current')))) - transferAmount;
        
        if((!checkAmount || !ethereum_address.isAddress(transferAddress)) || transferAmount <= 0){
            setMyAlert2("Invalid address or amount!");
            e.preventDefault();
        } else {
            if (parseInt(localStorage.getItem(String(localStorage.getItem('current')))) < transferAmount){
                setMyAlert2("The amount you are trying to transfer is bigger than the amount on your address!");
                e.preventDefault();
            } else {
                if (transferAddress === String(localStorage.getItem('current'))){
                    setMyAlert2(`You can't transfer to your own address! Please try again!`);
                    e.preventDefault();
                }
                else if (localStorage.getItem(transferAddress) == null) {
                    localStorage.setItem(transferAddress, transferAmount);
                    setMyAlert2(`A new Ethereum has been created and the transfer to it has been completed!`);
                    localStorage.setItem(String(localStorage.getItem('current')), NewValue);
                    setMyValue2(NewValue);
                    e.preventDefault();
                } else {
                    localStorage.setItem(transferAddress, transferValue);
                    localStorage.setItem(String(localStorage.getItem('current')), NewValue);
                    setMyAlert2(`Transfer succesfull`);
                    setMyValue2(NewValue);
                    e.preventDefault();
                }
            }
        }
    }

    function logoutHandler() {
      setRedirect(true);
      localStorage.removeItem('current')
    }

    function modalHandler() {
        setIsOpen(false);
        setMyAlert('');
    }
    function modalHandler2() {
        setIsOpen2(false);
        setMyAlert2('');
    }

  if (redirect){
    return <Router><Route exact path="/" component={Login}>
      </Route><Redirect to="/"/></Router>
  }

    return (
        <Router>
            <Switch>
            <Route exact path="/explore">
                <Explore/>
            </Route>
            <div className="test">
            <Modal myalert={myalert} open={isOpen} onClose={modalHandler}>
                <div className="w-auto h-auto flex flex-col justify-evenly items-center content-around">
                    <p className="text-black mb-5">Your Ether amount: {localStorage.getItem(localStorage.getItem('current'))}</p>
                    <p className="text-red-500 mb-10">{myalert}</p>
                    <input
                    id="inputField2"
                    type="number"
                    placeholder="Enter amount"
                    className="mb-10 text-center pl-2 h-11 text-7x1 w-88 border-solid border border-primary rounded-4x1 bg-fourth outline-none text-black"
                    maxLength="8"
                    />
                    <button onClick={mintHandler} className="bg-primary border-solid border focus:outline-none rounded-5x1 w-88 h-12 text-white text-7x1">Mint</button>
                </div>
            </Modal>
            <Modal open={isOpen2} onClose={modalHandler2}>
                <div className="w-auto h-auto flex flex-col justify-evenly items-center content-around">
                    <p className="text-black mb-5">Your Ether amount: {localStorage.getItem(localStorage.getItem('current'))}</p>
                    <p className="text-red-500 mb-10">{myalert2}</p>
                    <form className="flex flex-col justif-evenly items-center content-around" onSubmit={transferHandler}>
                    <input
                        required
                        id="inputField4"
                        placeholder="Enter address"
                        className="mb-10 text-center pl-2 h-11 text-7x1 w-88 border-solid border border-primary rounded-4x1 bg-fourth outline-none text-black"
                        />
                        <input
                        required
                        id="inputField5"
                        type="number"
                        placeholder="Enter amount"
                        className="mb-10 text-center pl-2 h-11 text-7x1 w-88 border-solid border border-primary rounded-4x1 bg-fourth outline-none text-black"
                        maxLength="8"
                        />
                        <button onClick={transferHandler} className="bg-primary border-solid border focus:outline-none rounded-5x1 w-88 h-12 text-white text-7x1">Transfer</button>
                    </form>
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
                        <p className="content text-white text-sm md:text-md lg:text-xl absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">Explore addresses and their Ether amount</p>
                        <FontAwesomeIcon icon={faSearch} color="white" className="h-7 wrapper-image"/>
                        </button>
                        </Link>
                    </div>
                    <div className="w-3/12 h-full">
                        <button onClick={() => setIsOpen(true)} className="wrapper relative text-8x1 italic bg-purple-700 border-solid border focus:outline-none rounded-5x1 w-full h-full hover:text-purple-700 hover:opacity-50 duration-300">Mint<br/>
                        <p className="content text-white text-sm md:text-md lg:text-xl absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">Add Ether to your address</p>
                        <FontAwesomeIcon icon={faWallet} color="white" className="h-7 wrapper-image"/>
                        </button>
                    </div>
                    <div className="w-3/12 h-full">
                        <button onClick={() => setIsOpen2(true)} className="wrapper relative text-8x1 italic bg-purple-700 border-solid border focus:outline-none rounded-5x1 w-full h-full hover:text-purple-700 hover:opacity-50 duration-300">Transfer<br/>
                        <p className="content text-white text-sm md:text-md lg:text-xl absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">Transfer Ether to another address</p>
                        <FontAwesomeIcon icon={faExchangeAlt} color="white" className="h-7 wrapper-image"/>
                        </button>
                    </div>
                </div>
                <div className="h-1/3 w-full">
                    <button onClick={logoutHandler} className="italic text-sm md:text-md lg:text-xl absolute top-0 right-0 bg-purple-700 border-solid border focus:outline-none rounded-5x1 w-1/12 h-1/12 mt-2 mr-4">Logout</button>
                </div>
            </div>
            </div>
            </Switch>
        </Router>
    )
}

export default Dashboard
