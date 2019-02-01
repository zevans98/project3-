import React, {Component} from 'react';
import {Modal, Tab} from 'semantic-ui-react';
import Login from '../LoginModal';
import Signup from '../SignupModal';
import PropTypes from 'prop-types';

// CSS Styling
import './style.css';
import {modalConstants} from '../../redux/constants';

const panes = [
    {
        menuItem: 'Log in',
        pane: {
            key: 'loginTab',
            content: <Login />,
        },
    },
    {
        menuItem: 'Sign up',
        pane: {
            key: 'signupTab',
            content: <Signup />,
        },
    },
];

export class AuthModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayed: false,
        };
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {mode} = this.props;
        if (mode !== prevProps.mode) {
            this.setState({
                activeIndex: mode === modalConstants.AUTH_LOGIN_MODE ? 0 : 1,
            });
        }
    }

    handleTabChange(e, data) {
        this.setState({activeIndex: data.activeIndex});
    }

    render() {
        const {open, onClose, mode} = this.props;
        const {activeIndex} = this.state;
        return (
            <Modal open={open} onClose={() => onClose(mode)} id="authModal">
                <Tab
                    menu={{borderless: true}}
                    panes={panes}
                    renderActiveOnly={false}
                    activeIndex={activeIndex}
                    onTabChange={this.handleTabChange}
                />
            </Modal>
        );
    }
}

AuthModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    mode: PropTypes.string,
};

export default AuthModal;
