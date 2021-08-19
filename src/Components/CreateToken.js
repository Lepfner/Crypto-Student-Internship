//Components
import Dashboard from './Dashboard';
//Dependencies
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {React, useState} from 'react';

function CreateToken() {
    return (
        <Router>
            <Switch>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <div className="test">
            <div className="fixed top-2/4 left-2/4 bg-white transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-2/5 rounded-6x1 shadow-lg flex text-center flex-col justify-evenly items-center content-around">
                <p className="italic text-black">New token:</p>
                <form>
                <input
                id="inputField"
                placeholder="Token name"
                maxLength="20"
                className="text-center pl-2 h-11 text-7x1 w-3/5 border-solid border border-primary rounded-4x1 bg-fourth outline-none text-black mb-4"
                />
                <input
                id="inputField"
                placeholder="Token symbol"
                maxLength="3"
                className="text-center pl-2 h-11 text-7x1 w-3/5 border-solid border border-primary rounded-4x1 bg-fourth outline-none text-black mb-4"
                />
                <input
                id="inputField"
                placeholder="Max supply"
                type="number"
                className="text-center pl-2 h-11 text-7x1 w-3/5 border-solid border border-primary rounded-4x1 bg-fourth outline-none text-black mb-4"
                />
                <button className="bg-primary border-solid border focus:outline-none rounded-5x1 w-3/5 h-12 text-white text-7x1 mb-4">Create</button>
                <Link to="/dashboard">
                    <button className="bg-primary border-solid border focus:outline-none rounded-5x1 w-3/5 h-12 text-white text-7x1">Back</button>
                </Link>
                </form>
            </div>
            </div>
            </Switch>
        </Router>
    )
}

export default CreateToken