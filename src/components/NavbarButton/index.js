import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Icon} from 'semantic-ui-react';

import './style.css';

export class NavbarButton extends Component {
    render() {
        const {text, to, icon} = this.props;
        return (
            <Link className="navbar-btn" to={to}>
                <Icon className="navbar-btn-icon" name={icon} size="large" />
                <div className="navbar-btn-text">{text}</div>
            </Link>
        );
    }
}

NavbarButton.propTypes = {
    text: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.string,
};

export default NavbarButton;
