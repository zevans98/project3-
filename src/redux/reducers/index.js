import {combineReducers} from 'redux';
import {authentication} from './auth.reducer';
import {notify} from './notif.reducer';
import {user} from './user.reducer';
import {modal} from './modal.reducer';

const rootReducer = combineReducers({
    authentication,
    notify,
    user,
    modal,
});

export default rootReducer;
