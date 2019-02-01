import React, {Component} from 'react';
import InventorySlot from '../InventorySlot';
import PropTypes from 'prop-types';
import { Segment, Grid } from 'semantic-ui-react';
import './style.css'

export class InventoryComponent extends Component {
    constructor(props) {
        super(props);
        this.craftSlots = this.craftSlots.bind(this);
    }

    craftSlots() {
        const {row, column} = this.props;
        const data = this.props.content || [];
        let slotArr = [];
        for (let y = 0; y < row; y++) {
            slotArr[y] = [];
            for (let x = 0; x < column; x++) {
                slotArr[y][x] = data[y * column + x];
            }
        }
        return slotArr;
    }

    render() {
        return (
            <Grid className="inventory-grid">
                {
                this.craftSlots().map((row, y) => (
                    <Grid.Row key={y} className="inventory-row">
                        {
                            row.map((column, x) => (
                                <InventorySlot key={x} data={column}/>
                            ))
                        }
                    </Grid.Row>
                ))
                }
            </Grid>
        );

    }
}

InventoryComponent.propTypes = {
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
};

InventoryComponent.defaultProps = {
    row: 0,
    column: 0
}

export default InventoryComponent;
