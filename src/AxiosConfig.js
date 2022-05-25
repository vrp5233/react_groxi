import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost/groxi-api/api/v1/'
});

export default instance;