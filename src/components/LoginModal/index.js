import React, {Component} from 'react';
import {Divider, Input, Checkbox, Button} from 'semantic-ui-react';
// import {SteamLoginButton} from '../../components/SteamLoginButton';
import {userActions} from '../../redux/actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.css';

export class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleLogin(e) {
        e.preventDefault();
        const {dispatch, redirectTo} = this.props;
        dispatch(
            userActions.login(
                this.state.username,
                this.state.password,
                redirectTo
            )
        );
    }

    render() {
        return (
            <div className="login-pane">
                {/* <SteamLoginButton */}
                    {/* text={'Log in with steam'}
                    className="centered"
                    fluid
                /> */}
                {/* <Divider horizontal>Or</Divider> */}
                <Input fluid placeholder="Email" />
                <Input fluid placeholder="Password" type="password" />
                <div className="login-row">
                    <div className="check-wrapper">
                        <Checkbox label={'Remember me'} />
                    </div>
                    <Button onClick={this.handleLogin}>Log In</Button>
                </div>
                <div className="forgot-pwd">Forgot your password ?</div>
                <Divider />
                <p className="disclaimer">
                    {`By creating an account you are agreeing to the Sokovia Accords`}
                </p>
            </div>
        );
    }
}

LoginComponent.propTypes = {
    dispatch: PropTypes.func,
    redirectTo: PropTypes.object,
};

function mapStateToProps(state) {
    const {loggingIn} = state.authentication;
    const {redirectTo} = state.modal;
    return {
        loggingIn,
        redirectTo,
    };
}

const ConnectedLoginComponent = connect(mapStateToProps)(LoginComponent);
export default ConnectedLoginComponent;
