import {api} from './api';

export const USR_TOKEN_KEY = 'acmusrtkn';
export const userService = {
    login,
    logout,
    register,
};

function login(username, password) {
    return new Promise((resolve, reject) => {
        let tkn = 'fakeToken';
        localStorage.setItem(USR_TOKEN_KEY, tkn);
        resolve(tkn);
    });
}

function logout() {
    return new Promise((resolve, reject) => {
        localStorage.removeItem(USR_TOKEN_KEY);
        resolve(true);
    });
}

function register(username, password) {
    return new Promise((resolve, reject) => {
        api.signUp(username, password).then((res) => {
            console.log(res);
            resolve(true);
        });
    });
}
