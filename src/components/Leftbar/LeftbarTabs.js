import React from 'react'
import './LeftbarTabs.css';

function LeftbarTabs({ title = "test", Icon }) {
    return (
        //two children inside container. left bar & icon
        <div className = 'leftbartabs'>
            {Icon && <Icon className = 'tab_icon'/>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    );
}

export default LeftbarTabs;
