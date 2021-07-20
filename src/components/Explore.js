import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import Dashboard from './Dashboard';

function Explore() {
    return (
        <Router>
            <Switch>
            <Route exact path="/dashboard" component={Dashboard}/>
            <div className="test">
            <div className="fixed top-2/4 left-2/4 bg-white transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-6x1 shadow-lg flex flex-col justify-evenly items-center content-around">
                <input
                placeholder="Enter address"
                className="text-center pl-2 h-11 text-7x1 w-88 border-solid border border-primary rounded-4x1 bg-fourth outline-none text-black"
                maxLength="8"
                />
                <button className="bg-primary border-solid border focus:outline-none rounded-5x1 w-88 h-12 text-white text-7x1">Explore</button>
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
