import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a1e2d-default-rtdb.firebaseio.com/'
});

export default instance;