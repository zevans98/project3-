import {notifConstants} from '../constants';

export function notify(state = {}, action) {
    switch (action.type) {
        case notifConstants.SUCCESS:
            return {
                type: 'notif-success',
                message: action.message,
            };
        case notifConstants.ERROR:
            return {
                type: 'notif-danger',
                message: action.message,
            };
        case notifConstants.CLEAR:
            return {};
        default:
            return state;
    }
}
