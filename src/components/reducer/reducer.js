import React from 'react';

export const originalState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    token: '',
    //"BQD55a0lEL5IspNbN1j5g6YXiHtDHLfS_huc8iyrbD7Zsy-LwCX4O34PZw6gGjyKtosWo2O-Uv4tkemseFlEiOvwD-oZapSg0IBAmfKrHDTR_ePrZZPIYCauY1LgjPSxOLoTEliKwb7QhkbvD0VKYrOrWfpL5w",
};

//state is the data, action is setting the data
const reducer = (state, action) => {
    console.log(action);

    //looks at actions and do it
    //...state keeps the state same, then set the user
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing,
            };
        case 'SET_ITEM':
            return {
                ...state,
                item: action.item,
            };
        case 'SET_TOP_ARTISTS':
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case 'SET_SPOTIFY':
            return {
                ...state,
                spotify: action.spotify,
            };
        default:
            return state;
    }
}





export default reducer;