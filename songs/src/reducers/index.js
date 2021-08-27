import { combineReducers} from "redux";

const songsReducer = () =>{
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Maçã Verde', duration: '3:20'},
        {title: 'Losing it', duration:'4:08'},
        {title: 'I Want it That Way', duration:'1:45'}
    ]

};

const selectedSongReducer = (selectedSong = null,action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    
    return selectedSong;
}

export default combineReducers({
   songs: songsReducer,
   selectedSong: selectedSongReducer 
});

