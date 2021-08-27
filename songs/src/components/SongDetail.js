import { STATEMENT_OR_BLOCK_KEYS } from '@babel/types';
import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
    if(song === null){
        return null;
    }
    return (
        <div>
            <h3>Detail Song</h3>
            <p>Title: {song.title} </p>
            <p>Duration: {song.duration}</p>
            
        </div>
    );
}
const mapStateToProps = (state) =>{
    return {
        song:state.selectedSong
    };
};

export default connect(mapStateToProps)(SongDetail);