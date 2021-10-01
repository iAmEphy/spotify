import React from 'react'
import './Songs.css';

function Songs( { track, playSong}) {
    return (
        <div className = 'songsRow' onClick={() => playSong(track.id)}>
            <img className='songsAlbum' src={track.album.images[0].url} alt='' />

            <div className = 'songsInfo'>
                <h1> {track.name} </h1>
                <p> {track.artists.map((artist) => artist.name).join(', ')} -{' '}{track.album.name}</p>
            </div>
            
        </div>
    );
}

export default Songs;
