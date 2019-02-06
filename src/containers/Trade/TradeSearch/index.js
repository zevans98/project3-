import React, {Component} from 'react';
import card from './cards'
import pokeSearch from './search';
import $ from 'jquery';
import './style.css'
export class TradeSearch extends Component {

    

     
    render() {
        const styles ={

        }
        
        console.log()
        return <div>
          <div id="searchDiv" className="container"><input id ="textBox" className="form-control-lg" type='text'></input>
            </div>  
            <div id="searchDiv"><button id="button" className="btn btn-danger" onClick ={pokeSearch.bind(this) }>SEARCH</button></div>
            <div className = 'container'>
            <div id="images" className='row'>
            
            </div>
            </div>
            
        
        </div>;
    }
}

export default TradeSearch;
