import React from 'react';
import Explore from './Explore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faWallet, faExchangeAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import SkyLight from 'react-skylight';

class Dashboard extends React.Component {
    constructor(props){
      super(props);
    }
    
    render(){

    function eventHandler(){
        var searchTerm = document.getElementById('inputField2').value;
    }

    function logoutHandler() {
        localStorage.removeItem('myAddress');
    }
    return (
        <Router>
            <Switch>
            <Route exact path="/explore" component={Explore}/>
            <div className="test">
            <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="">
                <div className="w-auto h-auto flex flex-col justify-evenly items-center content-around">
                    <p className="text-black mb-10">Your Ether amount: {localStorage.getItem('myAddress')}</p>
                    <input
                    id="inputField2"
                    placeholder="Enter amount"
                    className="mb-10 text-center pl-2 h-11 text-7x1 w-88 border-solid border border-primary rounded-4x1 bg-fourth outline-none text-black"
                    maxLength="8"
                    />
                    <button onClick={eventHandler} className="bg-primary border-solid border focus:outline-none rounded-5x1 w-88 h-12 text-white text-7x1">Mint</button>
                </div>
            </SkyLight>
            <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog2 = ref} title="">
                <div className="w-auto h-auto flex flex-col justify-evenly items-center content-around">
                    <p className="text-black mb-10">Your Ether amount: {localStorage.getItem('myAddress')}</p>
                    <input
                    placeholder="Enter address"
                    className="mb-10 text-center pl-2 h-11 text-7x1 w-88 border-solid border border-primary rounded-4x1 bg-fourth outline-none text-black"
                    maxLength="8"
                    />
                    <input
                    placeholder="Enter amount"
                    className="mb-10 text-center pl-2 h-11 text-7x1 w-88 border-solid border border-primary rounded-4x1 bg-fourth outline-none text-black"
                    maxLength="8"
                    />
                    <button className="bg-primary border-solid border focus:outline-none rounded-5x1 w-88 h-12 text-white text-7x1">Transfer</button>
                </div>
            </SkyLight>
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
                        <button onClick={() => this.simpleDialog.show()} className="wrapper relative text-8x1 italic bg-purple-700 border-solid border focus:outline-none rounded-5x1 w-full h-full hover:text-purple-700 hover:opacity-50 duration-300">Mint<br/>
                        <p className="content text-white absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">Add Ether to your address</p>
                        <FontAwesomeIcon icon={faWallet} color="white" className="h-7 wrapper-image"/>
                        </button>
                    </div>
                    <div className="w-3/12 h-full">
                        <button onClick={() => this.simpleDialog2.show()} className="wrapper relative text-8x1 italic bg-purple-700 border-solid border focus:outline-none rounded-5x1 w-full h-full hover:text-purple-700 hover:opacity-50 duration-300">Transfer<br/>
                        <p className="content text-white absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">Transfer Ether to another address</p>
                        <FontAwesomeIcon icon={faExchangeAlt} color="white" className="h-7 wrapper-image"/>
                        </button>
                    </div>
                </div>
                <div className="h-1/3 w-full">
                    <button onClick={logoutHandler} className="absolute top-0 right-0 bg-purple-700 border-solid border focus:outline-none rounded-5x1 w-1/12 h-1/12 mt-2 mr-4">Logout</button>
                </div>
            </div>
            </div>
            </Switch>
        </Router>
        
    )
}
}

export default Dashboard
