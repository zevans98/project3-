import {notifConstants} from '../constants';
import {generateActionCreator} from './util';

export const notifActions = {
    success: generateActionCreator(notifConstants.SUCCESS, 'message'),
    error: generateActionCreator(notifConstants.ERROR, 'message'),
    clear: generateActionCreator(notifConstants.CLEAR),
};
