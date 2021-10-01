import React, { useEffect } from 'react';
import './App.css';
import Login from './components/login/login';
//port token from spotify.js
import { getToken } from './components/login/spotify.js';
//npm install spotify-web-api-js
import SpotifyWebApi from 'spotify-web-api-js';
//spotify instance object. responsible for react/spotify
import Player from './components/Player/Player';
import { useDataValue } from './components/Data/Data';
const spotify = new SpotifyWebApi();

//Context provides a way to pass data through the component tree without having to pass props down manually at every level.

function App() {
  //state hook
  //useState short term memory store. refresh = lose token value. handle variables
  //const [token, setToken] = useState(null);

  //this line pull data from data layer
  const [{ token }, dispatch] = useDataValue();

  //useEffect run code based on condition in bracket
  //see if window changes
  //window.location.hash. get access token so not in URL
  useEffect(() => {
    const hash = getToken();

    window.location.hash = "";
    //temporary token
    const _token = hash.access_token;

    //store token into state, memory
    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      //setToken(_token)
      spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );
      //giving access token to spotify object. talk between react and spotify
      spotify.setAccessToken(_token);
      //get user's account. async call/ then dispatch action into Data Layer and reading the user
      spotify.getMe().then(user => {
        //console.log("User", user);

        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });

      spotify.getUserPlaylists().then((playlists) => dispatch({
        type: 'SET_PLAYLIST',
        playlists: playlists,
      }));

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
      spotify.getPlaylist('37i9dQZEVXcHrh3peGZgRi').then(
        (response) => dispatch({
          type: "SET_DISCOVER",
          discover_weekly: response,
        })
      );
    }
    //console.log('I have a token ', token);

    //empty bracket = run once
    //run once when it loads, and another when variable in [] changes
  }, []);
  //console.log('Userrrr', user);
  //console.log('Tokennnnnn', token);
  return (
    //BEM convention
    ///if theres a token, with a '?' then render player. OTHERWISE, turnery operator ':' render login page
        //pass spotify object as a prop into player
    <div className="app">
      
        
        {!token && <Login />}
      {token && <Player spotify={spotify} />}
      

    </div>

  );
}

export default App;
