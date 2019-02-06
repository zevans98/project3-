import React, {Component} from 'react';
import card from './cards'
import pokeSearch from './search';

export class TradeSearch extends Component {

    

     
    render() {
        
        console.log()
        return <div>
            <button id="button" onClick ={pokeSearch.bind(this) }></button>
            <input id ="textBox" type='text'></input>
            <div className = 'container'>
            <div id="images" className='row'>
            
            </div>
            </div>
            
        
        </div>;
    }
}

export default TradeSearch;
