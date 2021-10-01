import React from 'react'
import './Leftbar.css';
//import logo2 from '../../images/2.png';
import LeftbarTabs from './LeftbarTabs';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { useDataValue } from '../Data/Data';
//rfce//<h1>Leftside BAR</h1>
function Leftbar() {
    //destructering and getting the playlist
    const [{ playlists }, dispatch] = useDataValue();

    return (
        //left sidebar of Home/Search/Library + user playlists
        <div className = 'leftbar'>
            <img className = 'logo'
                src = 'https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
                alt = ""/>
            <LeftbarTabs 
                Icon = {HomeOutlinedIcon}
                title = 'Home'/>
            <LeftbarTabs 
                Icon = {SearchOutlinedIcon}
                title = 'Search'/>
            <LeftbarTabs
                Icon = {LibraryMusicOutlinedIcon}
                title = 'Your Library'/>
            <br />
            <LeftbarTabs
                Icon = {AddBoxIcon}
                title = 'Create Playlist'/>
            <LeftbarTabs
                Icon = {FavoriteBorderIcon}
                title = 'Liked Songs'/>
            <hr />
            
            
            
            {playlists?.items?.map((playlist) => (
                <LeftbarTabs title={playlist.name} />
               
            ))}
            
        </div>
    )
}

export default Leftbar
