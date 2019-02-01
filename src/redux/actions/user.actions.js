import {userConstants} from '../constants';
import {generateActionCreator} from './util';
import {userService} from '../../service';
import {notifActions, modalActions} from '../actions';
import {history} from '../helpers';
export const userActions = {
    login,
    logout,
    success,
    register,
};

function register(username, password, redirection) {
    return (dispatch) => {
        userService.register(username, password).then(
            (user) => {
                dispatch(success(user));
            },
            (err) => {
                // DOING NOTHING HERE (TODO)
            }
        );
    };
}

function login(username, password, redirection) {
    let request = generateActionCreator(userConstants.LOGIN_REQUEST, 'user');
    let success = generateActionCreator(userConstants.LOGIN_SUCCESS, 'user');
    let failure = generateActionCreator(userConstants.LOGIN_FAILURE, 'failure');

    return (dispatch) => {
        dispatch(request({username}));

        userService.login(username, password).then(
            (user) => {
                dispatch(success(user));
                dispatch(modalActions.closeAuthModal());
                history.push(redirection);
            },
            (error) => {
                dispatch(failure(error));
                dispatch(notifActions.error(error));
            }
        );
    };
}

function logout() {
    return (dispatch) => {
        history.push('/');
        userService.logout().then(() => {
            dispatch({type: userConstants.LOGOUT});
        });
    };
}

function success(user) {
    return (dispatch) => {
        dispatch({type: userConstants.LOGIN_SUCCESS, user});
    };
}
