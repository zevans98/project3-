import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {modalActions} from '../../redux/actions';
import './style.css';
import {modalConstants} from '../../redux/constants';

class LoginPanelComponent extends Component {
    constructor(props) {
        super(props);
        this.handleOpenAuthModal = this.handleOpenAuthModal.bind(this);
    }

    handleOpenAuthModal(mode) {
        const {dispatch} = this.props;
        dispatch(modalActions.openAuthModal(mode));
    }

    render() {
        return (
            <div className="login-panel">
                <div
                    className="login-btn"
                    onClick={() =>
                        this.handleOpenAuthModal(modalConstants.AUTH_LOGIN_MODE)
                    }
                >
                    LOG IN
                </div>
                <div
                    className="signup-btn"
                    onClick={() =>
                        this.handleOpenAuthModal(
                            modalConstants.AUTH_SIGNUP_MODE
                        )
                    }
                >
                    SIGN UP
                </div>
            </div>
        );
    }
}

LoginPanelComponent.propTypes = {
    dispatch: PropTypes.func,
};

export const LoginPanel = connect()(LoginPanelComponent);
