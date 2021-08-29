//Components
import Dashboard from './Dashboard';
//Dependencies
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {React, useState} from 'react';
import Web3 from 'web3';

function Explore() {

    const [searchTerm, setSearchTerm] = useState('Searched Ether amount:');
    //web3
    var ethereum_address = require('ethereum-address');
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

    const minABI = [
        // balanceOf
        {
          constant: true,
          inputs: [{ name: "_owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "balance", type: "uint256" }],
          type: "function",
        },
      ];

    const tokenAddress = "0x98d2f8442311fa3c06a2f3c3260f875e02469e38";
    const walletAddress = "0x7905665674B406bF9CC1b5A2D65dc331fE0561Cc"

    const contract = new web3.eth.Contract(minABI, tokenAddress);

    const ulala = async(e) => {
        const result = await contract.methods.balanceOf(walletAddress).call();
        e.preventDefault();
  
        const format = web3.utils.fromWei(result);

        console.log(format);
    }

    const eventHandler = (e) => {
        var searchTerm = document.getElementById('inputField').value;
        if (ethereum_address.isAddress(searchTerm)) {
                var exploreValue = web3.eth.getBalance(String(searchTerm), function(err, result) {
                    var returnValue =  web3.utils.fromWei(result, "ether") + " EC";
                    setSearchTerm(`Amount on searched address is: ${returnValue}!`);
                  })
                e.preventDefault();
        }else {
            console.log('Invalid Ethereum address.');
            setSearchTerm('Invalid Ethereum address!')
            e.preventDefault();
          }
    } 

    return (
        <Router>
            <Switch>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <div className="test">
            <div className="fixed top-2/4 left-2/4 bg-white transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-6x1 shadow-lg flex text-center flex-col justify-evenly items-center content-around">
                <p className="italic text-black">Please enter address below:</p>
                <p className="italic text-black">{searchTerm}</p>
                <form>
                <input
                id="inputField"
                placeholder="Ethereum address"
                className="text-center pl-2 h-11 text-7x1 w-full border-solid border border-primary rounded-4x1 bg-fourth outline-none text-black mb-4"
                />
                <button onClick={ulala} className="bg-primary border-solid border focus:outline-none rounded-5x1 w-full h-12 text-white text-7x1 mb-4">Explore</button>
                <Link to="/dashboard">
                    <button className="bg-primary border-solid border focus:outline-none rounded-5x1 w-full h-12 text-white text-7x1">Back</button>
                </Link>
                </form>
            </div>
            </div>
            </Switch>
        </Router>
    )
}

export default Explore