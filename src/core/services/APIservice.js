import axios from 'axios';
import config from '../../config/config';
async function signinAPI(email, password) {
    var formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    try {
        const response = await axios.post(config.APIURL + 'login', formdata);
        return response;
    } catch (error) {
        // you will get error here.
        console.log(error);
        return error;
    }
}
export {
    signinAPI,
}
