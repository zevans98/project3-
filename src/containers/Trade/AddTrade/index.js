import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import { TradeOffer } from '../../../components/TradeOffer';


export class AddTrade extends Component {
    render() {
        return (
            <div>
                <TradeOffer />
            </div>
        );
    }
}

export default AddTrade;
