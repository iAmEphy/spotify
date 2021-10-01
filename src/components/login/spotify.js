



//go to spotify api to authentication then back to my host site
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectURL = "http://localhost:3000/";

const clientIDonSpotify = "24e7769bffd542558bb1af2850e8c85d";

//allows user to do these scopes~ modify
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ View your Spotify account data
Your name and username, your profile picture, how many followers you have on Spotify and your public playlists
View your activity on Spotify
Content you have recently played
The content you are playing
The content you are playing and Spotify Connect devices information
Your top artists and content
Take actions in Spotify on your behalf
Control Spotify on your devices*/

//string interpolation ``
//generate one long web address to send user. to authorize then to my size
//scopes.join. give an array space of %20
//once authenticated, return a token to my site
export const LoginURL = `${authEndpoint}?client_id=${clientIDonSpotify}&redirect_uri=${redirectURL}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

  //go to the url and get "#access" token
  //finding position of the hashtag
  //substring first string and split at & symbol
  //Reduce- a iterators: Array methods which call a function an each element in an array. Map is probably the simplest iterator, and if you can understand that, you are halfway to understanding reduce.
  //let parts. split at equal sign. #accessToken = mykey&name=tony
  //inital[parts[0]] will grab "accessToken""
  //decodeURIComponent PARTS[1] will grab "myKEY"
  export const getToken = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
}