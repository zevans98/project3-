import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom';
import {PrivateRoute} from './navigation/PrivateRoute';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {history} from './redux/helpers';
import {userActions, modalActions} from './redux/actions';
import HomeComponent from './containers/Home';
import {MyTrades} from './containers/Trade/MyTrades';
import {AddTrade} from './containers/Trade/AddTrade';
import {TradeSearch} from './containers/Trade/TradeSearch';
import {Navbar} from './components/Navbar';
import {AuthModal} from './components/AuthModal';
import {modalConstants} from './redux/constants/modalConstants';

import './App.css';
import {USR_TOKEN_KEY} from './service/userService';

class App extends Component {
    constructor(props) {
        super(props);
        const {dispatch} = this.props;
        const user = localStorage.getItem(USR_TOKEN_KEY);
        if (user) {
            dispatch(userActions.success(user));
        }
        history.listen((location, action) => {
            // clear alert on location change
            const {state} = location;
            if (state && state.loginRequested) {
                console.log('Opening modal cause of loginRequested');
                dispatch(
                    modalActions.openAuthModal(
                        modalConstants.AUTH_LOGIN_MODE,
                        state.from
                    )
                );
            }
        });

        this.handleCloseAuth = this.handleCloseAuth.bind(this);
    }

    handleCloseAuth(mode) {
        const {dispatch} = this.props;
        dispatch(modalActions.closeAuthModal(mode));
    }

    render() {
        const {authModalOpen, authModalMode} = this.props;
        return (
            <Router history={history}>
                <div>
                    <Navbar />
                    <Route exact path="/" component={HomeComponent} />
                    {/* TRADES  */}
                    <PrivateRoute
                        path="/mytrades"
                        component={MyTrades}
                        fallbackUrl="/"
                    />
                    <PrivateRoute
                        path="/addtrade"
                        component={AddTrade}
                        fallbackUrl="/"
                    />
                    <PrivateRoute
                        path="/searchtrade"
                        component={TradeSearch}
                        fallbackUrl="/"
                    />
                    <AuthModal
                        mode={authModalMode}
                        open={authModalOpen}
                        onClose={this.handleCloseAuth}
                    />
                </div>
            </Router>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func,
    authModalOpen: PropTypes.bool,
    authModalMode: PropTypes.string,
};

function mapStateToProps(state) {
    const {alert} = state;
    const {loggedIn} = state.authentication;
    const {authModalOpen, authModalMode} = state.modal;
    return {
        alert,
        loggedIn,
        authModalOpen,
        authModalMode,
    };
}
const connectedApp = connect(mapStateToProps)(App);

export default connectedApp;
