import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 2IToOUUY5JueEy1hfhore8aW7jECu9dJ3EPCG8tA1kw'
    }
});