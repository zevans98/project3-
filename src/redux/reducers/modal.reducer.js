import {modalConstants} from '../constants';

export function modal(state = {}, action) {
    switch (action.type) {
        case modalConstants.OPEN_AUTH_MODAL:
            return {
                authModalOpen: true,
                authModalMode: action.mode,
                redirectTo: action.from,
            };
        case modalConstants.CLOSE_AUTH_MODAL:
            return {
                authModalOpen: false,
                authModalMode: action.mode,
            };
        default:
            return state;
    }
}
