import {modalConstants} from '../constants';
import {generateActionCreator} from './util';

export const modalActions = {
    openAuthModal: generateActionCreator(
        modalConstants.OPEN_AUTH_MODAL,
        'mode',
        'from'
    ),
    closeAuthModal: generateActionCreator(modalConstants.CLOSE_AUTH_MODAL),
};
