import axios from 'axios';

export default axios.create({
    baseURL:'http://http://35.175.112.191:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
