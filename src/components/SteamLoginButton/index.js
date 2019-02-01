import React, {Component} from 'react';
import {Button, Icon} from 'semantic-ui-react';

// CSS Styling
import './styles.css';

export class SteamLoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {text, onClick, className, fluid} = this.props;
        return (
            <Button
                fluid={fluid}
                icon
                labelPosition="left"
                className={`steamBtn ${className || ''}`}
                onClick={onClick}
            >
                <Icon size="big" name="steam" />
                {text}
            </Button>
        );
    }
}

export default SteamLoginButton;
