import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Dashboard from './Dashboard';
import {React, useState} from 'react';

function Explore() {

    const [searchTerm, setSearchTerm] = useState('Searched Ether amount:');

    const eventHandler = () => {
        var searchTerm = document.getElementById('inputField').value;

        if (localStorage.getItem(searchTerm) == null) {
            localStorage.setItem(searchTerm, 0);
            setSearchTerm('A new Ethereum has been created and a value of zero Ether has been assigned!');
            alert (`A new Ethereum has been created and a value of zero Ether has been assigned!`);
        } else {
            var localStorageItem = localStorage.getItem(searchTerm);
            setSearchTerm('Amount on ' + {searchTerm} + ' is: ' + {localStorageItem} + ' Ether!');
            alert (`Amount on ${searchTerm} is: ${localStorageItem} Ether!`);
        }
    }

    return (
        <Router>
            <Switch>
            <Route exact path="/dashboard">
                <Dashboard/>
            </Route>
            <div className="test">
            <div className="fixed top-2/4 left-2/4 bg-white transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-6x1 shadow-lg flex flex-col justify-evenly items-center content-around">
                <p className="italic text-black">Please enter address below:</p>
                <p className="italic text-black">{searchTerm}</p>
                <input
                id="inputField"
                placeholder="Ethereum address"
                className="text-center pl-2 h-11 text-7x1 w-88 border-solid border border-primary rounded-4x1 bg-fourth outline-none text-black"
                maxLength="8"
                />
                <button onClick={eventHandler} className="bg-primary border-solid border focus:outline-none rounded-5x1 w-88 h-12 text-white text-7x1">Explore</button>
                <Link to="/dashboard">
                    <button className="bg-primary border-solid border focus:outline-none rounded-5x1 w-88 h-12 text-white text-7x1">Back</button>
                </Link>
            </div>
            </div>
            </Switch>
        </Router>
    )
}

export default Explore
