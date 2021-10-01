import React from 'react'
import './Foot.css';
import ShuffleSharpIcon from '@mui/icons-material/ShuffleSharp';
import PlayCircleOutlineSharpIcon from '@mui/icons-material/PlayCircleOutlineSharp';
import SkipNextSharpIcon from '@mui/icons-material/SkipNextSharp';
import SkipPreviousSharpIcon from '@mui/icons-material/SkipPreviousSharp';
import RepeatSharpIcon from '@mui/icons-material/RepeatSharp';
import PlaylistPlaySharpIcon from '@mui/icons-material/PlaylistPlaySharp';
import VolumeDownSharpIcon from '@mui/icons-material/VolumeDownSharp';
import { Grid, Slider } from '@material-ui/core';
import SpeakerSharpIcon from '@mui/icons-material/SpeakerSharp';
import { useDataValue } from '../Data/Data';
import { useEffect } from 'react';
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";

function Foot({ spotify }) {
    const [{ item, playing }, dispatch] = useDataValue();

    useEffect(() => {
        spotify?.getMyCurrentPlaybackState().then((r) => {
            console.log(r);

            dispatch({
                type: "SET_PLAYING",
                playing: r.is_playing,
            });

            dispatch({
                type: "SET_ITEM",
                item: r.item,
            });
        });
    }, [spotify]);
    const handlePlayPause = () => {

        if (playing) {
            spotify.pause();
            dispatch({
                type: 'SET_PLAYING',
                playing: false,
            });
        }
        else {
            spotify.play();
            dispatch({
                type: 'SET_PLAYING',

                playing: true,

            });
        }
    };

    const skipNext = () => {

        spotify.skipToNext();
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
    };

    const skipPrevious = () => {
        spotify.skipToPrevious();
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
    };
    return (

        //the bottom side of the page. with album and song on left. player buttons in middle and sound adjust on right
        <div className='foot' alignItems="baseline">

            <div className="foot_left">
                <img
                    className="foot_albumLogo"
                    src={item?.album.images[0].url}
                    alt={item?.name}
                />
                {item ? (
                    <div className="foot_song">
                        <h4>{item.name}</h4>
                        <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                ) : (
                    <div className="foot_song">
                        <h4>No song</h4>

                    </div>
                )}
            </div>

            <div className='foot_center'>

                <ShuffleSharpIcon className='foot_green' />
                <SkipPreviousSharpIcon className='foot_icon' onClick={skipNext} />
                {playing ? (
                    <PauseCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer__icon"
                    />
                ) : (
                    <PlayCircleOutlineSharpIcon className='foot_icon' onClick={handlePlayPause} fontSize='large' />
                )}

                <SkipNextSharpIcon className='foot_icon' onClick={skipPrevious} />
                <RepeatSharpIcon className='foot_green' />
            </div>

            <div className='foot_right'>
                <Grid container spacing={2} item xs={12}>
                    <Grid item>
                        <PlaylistPlaySharpIcon />
                    </Grid>
                    <Grid item>
                        <SpeakerSharpIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownSharpIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider className='slidercolor' size="medium" aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Foot;
