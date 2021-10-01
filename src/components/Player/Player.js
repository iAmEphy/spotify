import React from 'react'
import './Player.css';
import Leftbar from '../Leftbar/Leftbar';
import Bodyunderside from '../Bodyunderside/Bodyunderside';
import Foot from '../Foot/Foot';

/*<h1>Welcome Player.js</h1>*/

function Player({ spotify }) {
    return (
        <div className = 'player'>
            <div className = 'player_body'>
                <Leftbar />
                <Bodyunderside spotify = { spotify }/>
            </div>
            
            <Foot />
        </div>
    )
}

export default Player;
