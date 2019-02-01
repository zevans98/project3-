import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Icon} from 'semantic-ui-react';
import {userActions} from '../../redux/actions';
import PropTypes from 'prop-types';

import './style.css';

class LogoutButtonComponent extends Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        const {dispatch} = this.props;
        dispatch(userActions.logout());
    }

    render() {
        return (
            <Button id="logout-btn" onClick={this.handleLogout}>
                <Icon name="log out" size="big" />
            </Button>
        );
    }
}

LogoutButtonComponent.propTypes = {
    dispatch: PropTypes.func,
};

export const LogoutButton = connect()(LogoutButtonComponent);
