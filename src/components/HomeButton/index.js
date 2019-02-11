import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'semantic-ui-react';

import './style.css';

export class HomeButton extends Component {
    render() {
        return (
            <Link to="/" className="home-btn">
                <Icon
                    name="star"
                    size="big"
                    className="home-btn-icon"
                />
                <div className="home-btn-text">Pokemon Card Collector</div>
            </Link>
        );
    }
}

export default HomeButton;
