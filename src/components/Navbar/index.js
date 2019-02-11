import React, {Component} from 'react';
import NavbarButton from '../NavbarButton';
import {HomeButton} from '../HomeButton';
import {connect} from 'react-redux';
import './style.css';
import {LogoutButton} from '../LogoutButton';
import {LoginPanel} from '../LoginPanel';
import PropTypes from 'prop-types';

const menus = [
    {
        title: 'My Collection',
        link: '/mycollection',
        icon: 'briefcase',
    },
    {
        title: 'Make Trade',
        link: '/maketrade',
        icon: 'dollar',
    },
    {
        title: 'Add Pokemon',
        link: '/addpokemon',
        icon: 'plus',
    },
];

export class NavbarComponent extends Component {
    render() {
        const {loggedIn} = this.props;
        return (
            <div id="navbar">
                <HomeButton />
                {menus.map((menu) => (
                    <NavbarButton
                        key={menu.title}
                        text={menu.title}
                        to={menu.link}
                        icon={menu.icon}
                    />
                ))}
                {loggedIn && <LogoutButton />}
                {!loggedIn && <LoginPanel />}
            </div>
        );
    }
}

NavbarComponent.propTypes = {
    loggedIn: PropTypes.bool,
};

function mapStateToProps(state) {
    const {loggedIn} = state.authentication;
    return {loggedIn};
}

export const Navbar = connect(mapStateToProps)(NavbarComponent);
