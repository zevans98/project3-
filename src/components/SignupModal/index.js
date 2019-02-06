import React, {Component} from 'react';
import {Divider, Input, Checkbox, Button} from 'semantic-ui-react';
// import {SteamLoginButton} from '../../components/SteamLoginButton';
import Recaptcha from 'react-recaptcha';
import {connect} from 'react-redux';
import {userActions} from '../../redux/actions';
import PropTypes from 'prop-types';

import './styles.css';

export class SignupModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            agreed: false,
            captcha: true, // TODO handle captcha for backend call
        };

        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeConfirm = this.handleChangeConfirm.bind(this);
        this.handleCheckAgreed = this.handleCheckAgreed.bind(this);
        this.handleCaptcha = this.handleCaptcha.bind(this);
    }

    handleSignUp() {
        const {dispatch} = this.props;
        dispatch(
            userActions.register(this.state.username, this.state.password)
        );
    }

    handleChangeUsername(e, val) {
        this.setState({
            username: val.value,
        });
    }

    handleChangePassword(e, val) {
        this.setState({
            password: val.value,
        });
    }

    handleChangeConfirm(e, val) {
        this.setState({
            passwordConfirm: val.value,
        });
    }

    handleCheckAgreed(e, val) {
        console.log('agreeed ? ', val);
        this.setState({
            agreed: val.value,
        });
    }

    handleCaptcha() {
        // TODO
    }

    validateSignup() {
        return true; // TODO
    }

    render() {
        return (
            <div className="signup-pane">
                {/* <SteamLoginButton
                    text={'Sign up with steam'}
                    className="centered"
                    fluid */}
                {/* />
                <Divider horizontal>Or</Divider> */}
                <Input
                    fluid
                    placeholder="Email"
                    value={this.state.username}
                    onChange={this.handleChangeUsername}
                />
                <Input
                    fluid
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                />
                <Input
                    fluid
                    placeholder="Confirm password"
                    type="password"
                    value={this.state.passwordConfirm}
                    onChange={this.handleChangeConfirm}
                />
                <div className="signup-row">
                    <Checkbox
                        label={'I read and agree to Terms and Privacy policy'}
                        value={this.state.agreed}
                        onChange={this.handleCheckAgreed}
                    />
                </div>
                <Recaptcha sitekey="6LevJW4UAAAAAF_l7ZqC7NMuaMOGCNzAgEEN10RN" />
                <Button
                    className="signup-btn"
                    onClick={this.handleSignUp}
                    disabled={!this.validateSignup()}
                >
                    SIGN UP
                </Button>
            </div>
        );
    }
}

SignupModalComponent.propTypes = {
    dispatch: PropTypes.func,
};

function mapStateToProps(state) {
    const {loggingIn} = state.authentication;
    const {redirectTo} = state.modal;
    return {
        loggingIn,
        redirectTo,
    };
}

const SignupModal = connect(mapStateToProps)(SignupModalComponent);

export default SignupModal;
