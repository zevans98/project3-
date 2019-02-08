import React, {Component} from 'react';
import card from './cards'
import pokeSearch from './search';
import $ from 'jquery';
import './style.css'
import secondSearch from './search'
const axios = require('axios');
export class TradeSearch extends Component {
        
    state = {
        name:'how',
        sprite:'howd',
        type:'hpwdy'
    };

    change = () =>{
        var pokeName = document.getElementById('textBox').value;
        console.log(pokeName);
         axios.get('https://pokeapi.co/api/v2/pokemon/'+pokeName).then(function(response){
        
                       console.log(response);
                      
                       
                       this.setState({
                           name:response.data.name,
                           sprite: response.data.sprites.front_shiny
                       })
                    }.bind(this))
        
    }

            
           
           
    render() {
        
        console.log()
        return <div>
          <div id="searchDiv" className="container"><input id ="textBox" className="form-control-lg" type='text'></input>
            </div>  
            <div id="searchDiv"><button id="button" className="btn btn-danger" onClick ={this.change.bind(this) }>SEARCH</button></div>
            <div className = 'container'>
            <div className = "container">
                <div className = "card" id= "mainBox">
                    <img src={this.state.sprite}  className="card-img-top"></img>
                    <hr></hr>
                    <div className='card-body'>
                        <h1 className='card-text'>{this.state.name}</h1>
                        <button type="button" id="addButton"class="btn btn-danger">ADD</button>
                    </div>
                </div>
            </div>
            <div id="images" className='row'>
            
            </div>
            </div>
            
        
        </div>;
    }
}

export default TradeSearch;
