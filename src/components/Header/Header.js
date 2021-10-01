import React from 'react';

import './Header.css';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Avatar } from '@mui/material';
import { useDataValue } from '../Data/Data';
import Button from "@material-ui/core/Button";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header() {
    const[ { user }, dispatch] = useDataValue();

    //top portion of search and arrows and user icon/name
    return (
        <div className = 'header' item xs={12}>
            <div className = 'lefthead'>
                
                <ManageSearchIcon />
                <input placeholder = "Search for your favorite Artists, songs, or explore"
                type = "text"/>
            </div>

            <div className = 'righthead'>
                <Button className = 'upgradebutton' size="medium" variant = 'contained' style={{borderRadius: 50, border: '0.1px solid', backgroundColor: '#000000', color: '#808080' }} target="_blank" href='https://www.spotify.com/us/premium/'>Upgrade</Button>
                
                <div class="divider"/>
                <div className = 'name'>
                <Avatar src={user?.images[0]?.url} 
                        alt={user?.display_name} />
                <h4>{ user?.display_name}</h4>
                <KeyboardArrowDownIcon/>
                </div>
            </div>
        </div>
    )
}

export default Header;
