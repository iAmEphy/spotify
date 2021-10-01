import React from 'react'
import './Bodyunderside.css';
import Header from '../Header/Header';
import { useDataValue } from '../Data/Data';

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Collapse, collapseClasses } from '@mui/material';

import Songs from '../Songs/Songs';

function Bodyunderside({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataValue();

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: 'SET_ITEM',
            item: r.item,
          });
          dispatch({
            type: 'SET_PLAYING',
            playing: true,
          });
        });
      });
  };

  const playPlaylist = (id) => {
    spotify.play({
      context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
    })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: 'SET_ITEM',
            item: r.item,
          });
          dispatch({
            type: 'SET_PLAYING',
            playing: true,
          });
        });
      });
  };
  return (
    <div className='body' item xs={12}>
      <Header spotify={spotify} />

      <div className='bodytop'>
        <img src={discover_weekly?.images[0].url} alt='' />

        <div className='bodytoptext'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>

        </div>
      </div>

      <div className='bodysonglist'>
        <div className='bodyicons'>
          <PlayCircleFilledIcon className='bodyshuffle' onClick={playPlaylist} style={{ color: "#1DB954", }} />
          <FavoriteIcon fontSize='large' style={{ color: "#1DB954", }} />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) =>
        (<Songs playSong={playSong}
          track={item.track} />
        ))}

      </div>
    </div>
  );
}

export default Bodyunderside;
