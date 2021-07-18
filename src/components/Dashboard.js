import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faWallet, faExchangeAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
    return (
        <div className="test">
            <div className="fixed top-2/4 left-2/4 bg-white transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 rounded-6x1 shadow-lg flex flex-col justify-around items-center">
                <div className="h-1/3 w-full flex justify-center items-center">
                    <h1 className="text-10x1 italic text-black">Lepfner's blockchain explorer</h1>
                </div>
                <div className="h-1/3 w-full flex justify-around items-center">
                    <div className="w-3/12 h-full">
                        <button className="text-8x1 italic bg-purple-700 border-solid border focus:outline-none rounded-5x1 w-full h-full">Explore<br/>
                        <FontAwesomeIcon icon={faSearch} color="white"/>
                        </button>
                    </div>
                    <div className="w-3/12 h-full">
                        <button className="text-8x1 italic bg-purple-700 border-solid border focus:outline-none rounded-5x1 w-full h-full">Mint<br/>
                        <FontAwesomeIcon icon={faWallet} color="white"/>
                        </button>
                    </div>
                    <div className="w-3/12 h-full">
                        <button className="text-8x1 italic bg-purple-700 border-solid border focus:outline-none rounded-5x1 w-full h-full">Transfer<br/>
                        <FontAwesomeIcon icon={faExchangeAlt} color="white"/>
                        </button>
                    </div>
                </div>
                <div className="h-1/3 w-full">
                    <button className="absolute top-0 right-0 bg-purple-700 border-solid border focus:outline-none rounded-5x1 w-1/12 h-1/12 mt-2 mr-4">Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
