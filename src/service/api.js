// Class containing all API calls specifications
import axios from 'axios';

const apiUrl = 'https://evening-cliffs-22103.herokuapp.com';
const POST = 'POST';
const GET = 'GET';
const POST_FORM = 'POST-FORM';

const requestBuilder = (url, method, data, token) => {
    if (method === GET) {
        if (token) {
            return axios.get(url, {
                headers: {Authorization: 'Bearer ' + token},
            });
        } else {
            return axios.get(url);
        }
    } else if (method === POST) {
        if (token) {
            return axios.post(url, data, {
                headers: {Authorization: 'Bearer ' + token},
            });
        } else {
            return axios.post(url, data);
        }
    } else if (method === POST_FORM) {
        if (token) {
            return axios({
                method: 'post',
                url: url,
                data: data,
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'multipart/form-data',
                },
            });
        } else {
            return axios({
                method: 'post',
                url: url,
                data: data,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        }
    } else {
        // We'll see if we need to handle more cases in the future.
    }
};

export const api = {
    signUp: (username, password) => {
        let data = {email: username, password};
        console.log('Data :', data);
        return requestBuilder(`${apiUrl}/sign-up`, POST, data, undefined);
    },
    login: (username, password) => {
        let data = {username, password};
        return requestBuilder(`${apiUrl}/login`, POST, data, undefined);
    },
};
