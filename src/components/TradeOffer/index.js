import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Segment, Icon, Divider } from 'semantic-ui-react';
import { InventoryComponent } from '../Inventory';

import './style.css';

const columns = 7;
const rows = 2;

export class TradeOffer extends Component {

    render() {
        return (
            <div className="offer-wrapper">
                <Segment className="offer-pane">
                    <div className="offer-container">
                        <div className = "mine">
                            <h2>I have</h2>
                            <InventoryComponent className="my-offer" row={rows} column={columns} />
                        </div>
                        <Icon name="arrows alternate horizontal" size="huge" inverted  className="exchange-icn"></Icon>
                        <div className = "theirs">
                            <h2>I want</h2>
                            <InventoryComponent className="theirs-offer" row={rows} column={columns} />
                        </div>
                    </div>
                    <Divider horizontal>&#9733;</Divider>
                </Segment>
            </div>
            
        );
    }
}

TradeOffer.propTypes = {};

export default TradeOffer;
