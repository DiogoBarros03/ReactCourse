import axios from 'axios';

const KEY ='AIzaSyC4CWMo4C4Vw6r84zlTRrLA7pk567GkBWI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        type: 'video',      
        key: KEY
   } 
});
