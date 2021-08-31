//Components
import Explore from './Explore';
import Login from '../App';
import Modal from './Modal';
//Dependencies
import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faWallet, faExchangeAlt, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import Web3 from 'web3';
function Dashboard() {
    //epic coin 0x98d2f8442311fa3c06a2f3c3260f875e02469e38

    //Mint & transfer
    const [myalert, setMyAlert] = useState('');
    const [myalert2, setMyAlert2] = useState('');
    const [myValue, setMyValue] = useState(localStorage.getItem(localStorage.getItem('current')));
    const [myValue2, setMyValue2] = useState();
    //Modals
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    //Redirect
    const [redirect, setRedirect] = useState(false);
    //web3
    var ethereum_address = require('ethereum-address');
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

    let minABI2 = [
        // mint
        {
         "constant": false,
         "inputs": [
          {
           "name": "_to",
           "type": "address"
          },
          {
           "name": "_value",
           "type": "uint256"
          }
         ],
         "name": "mint",
         "outputs": [
          {
           "name": "",
           "type": "bool"
          }
         ],
         "type": "function"
        }
       ];
    
    function mintHandle(e){
        const mintValue = document.getElementById('inputField2').value;

        function getAccounts(callback) {
            web3.eth.getAccounts((error,result) => {
                if (error) {
                    console.log(error);
                } else {
                    callback(result);
                }
            });
        }

        getAccounts(function(result) {
            const mintAddress = result[0];
            let tokenAddress = "0x98d2f8442311fa3c06a2f3c3260f875e02469e38";

            let decimals = web3.utils.toBN(18);
            let amount = web3.utils.toBN(`${mintValue}`);
            let value = amount.mul(web3.utils.toBN(10).pow(decimals));
            let toAddress = `${mintAddress}`

            let contract = new web3.eth.Contract(minABI2, tokenAddress);
            contract.methods.mint(toAddress, value).call();
        })
    }
    {/*
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
    }
*/}
    let minABI = [
        // transfer
        {
         "constant": false,
         "inputs": [
          {
           "name": "_to",
           "type": "address"
          },
          {
           "name": "_value",
           "type": "uint256"
          }
         ],
         "name": "transfer",
         "outputs": [
          {
           "name": "",
           "type": "bool"
          }
         ],
         "type": "function"
        }
       ];

    function transferHandler(e){

        const checkAddress = document.getElementById('inputField4').value;

        const checkInput = parseInt(document.getElementById('inputField5').value);
        var checkAmount = document.getElementById('inputField5').value.trim();

        if((!checkAmount || !ethereum_address.isAddress(checkAddress)) || checkInput <= 0){
            setMyAlert2("Invalid address or amount!");
            e.preventDefault();
        }else {
            function getAccounts(callback) {
                web3.eth.getAccounts((error,result) => {
                    if (error) {
                        console.log(error);
                    } else {
                        callback(result);
                    }
                });
            }
    
            e.preventDefault();
    
            getAccounts(function(result) {
            console.log(result[0]);
            const currentAddress = result[0];
            
            const tokenAd = document.getElementById('inputField6').value;
            let tokenAddress = `${tokenAd}`;
            let fromAddress = `${currentAddress}`;
    
            const transferAmount = document.getElementById('inputField5').value;
            e.preventDefault();
            let decimals = web3.utils.toBN(18);
            let amount = web3.utils.toBN(`${transferAmount}`);
        
            // Get ERC20 Token contract instance
            let contract = new web3.eth.Contract(minABI, tokenAddress);
            // calculate ERC20 token amount
            let value = amount.mul(web3.utils.toBN(10).pow(decimals));
    
            const transferAddress = document.getElementById('inputField4').value;
            let toAddress = `${transferAddress}`;
            contract.methods.transfer(toAddress, value).send({from: fromAddress})
            .on('transactionHash', function(hash){
            console.log(hash);
            });
            e.preventDefault();
            });
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
            <Route exact path="/explore" component={Explore}></Route>
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
                    <button onClick={mintHandle} className="bg-primary border-solid border focus:outline-none rounded-5x1 w-88 h-12 text-white text-7x1">Mint</button>
                </div>
            </Modal>

            <Modal open={isOpen2} onClose={modalHandler2}>
                <div className="w-auto h-auto flex flex-col justify-evenly items-center content-around">
                    <p className="text-red-500 mb-10">{myalert2}</p>
                    <form className="flex flex-col justify-evenly items-center content-around" onSubmit={transferHandler}>
                        <input
                        required
                        id="inputField4"
                        placeholder="Enter address"
                        className="mb-10 text-center pl-2 h-11 text-7x1 w-88 border-solid border border-primary rounded-4x1 bg-fourth outline-none text-black"
                        />
                        <input
                        required
                        id="inputField6"
                        placeholder="Enter token address"
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
                    <div className="w-1/4 h-full">
                        <Link to="/explore">
                        <button className="text-white wrapper relative text-8x1 italic bg-purple-700 border-solid border focus:outline-none rounded-5x1 w-full h-full hover:text-purple-700 hover:opacity-50 duration-300">Explore<br/>
                        <p className="content text-white text-sm md:text-md lg:text-xl absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">Explore addresses and their Ether amount</p>
                        <FontAwesomeIcon icon={faSearch} color="white" className="h-7 wrapper-image"/>
                        </button>
                        </Link>
                    </div>
                    <div className="w-1/4 h-full">
                        <button onClick={() => setIsOpen(true)} className="text-white wrapper relative text-8x1 italic bg-purple-700 border-solid border focus:outline-none rounded-5x1 w-full h-full hover:text-purple-700 hover:opacity-50 duration-300">Mint<br/>
                        <p className="content text-white text-sm md:text-md lg:text-xl absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">Add Ether to your address</p>
                        <FontAwesomeIcon icon={faWallet} color="white" className="h-7 wrapper-image"/>
                        </button>
                    </div>
                    <div className="w-1/4 h-full">
                        <button onClick={() => setIsOpen2(true)} className="text-white wrapper relative text-8x1 italic bg-purple-700 border-solid border focus:outline-none rounded-5x1 w-full h-full hover:text-purple-700 hover:opacity-50 duration-300">Transfer<br/>
                        <p className="content text-white text-sm md:text-md lg:text-xl absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">Transfer Ether to another address</p>
                        <FontAwesomeIcon icon={faExchangeAlt} color="white" className="h-7 wrapper-image"/>
                        </button>
                    </div>
                </div>
                <div className="h-1/3 w-full">
                    <button onClick={logoutHandler} className="text-white italic text-sm md:text-md lg:text-xl absolute top-0 right-0 bg-purple-700 border-solid border focus:outline-none rounded-5x1 w-1/12 h-1/12 mt-2 mr-4">Logout</button>
                </div>
            </div>
            </div>
            </Switch>
        </Router>
    )
}

export default Dashboard;