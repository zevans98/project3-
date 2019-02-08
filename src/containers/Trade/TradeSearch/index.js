import React, {Component} from 'react';
import card from './cards'
import pokeSearch from './search';
import $ from 'jquery';
import './style.css'
import secondSearch from './search'
const axios = require('axios');
const mongoose = require('mongoose');
//const pokemon = require('../../../models2/pokemodels')
export class TradeSearch extends Component {
        
    state = {
        name:'Pokemon',
        sprite:'https://art.ngfiles.com/images/386000/386577_stardoge_8-bit-pokeball.png?f1446737358',
        type:''
    };

    // newPokemon() {
    //    let newPokemon = new pokemon({
    //     name: "charizard"
    //    })
    //    newPokemon.save().then(doc=>{console.log(doc)}).catch(err=>{
    //        console.log(err)
    //    })
    //   };
    

    change = () =>{
        var pokeName = document.getElementById('textBox').value;
        console.log(pokeName);
         axios.get('https://pokeapi.co/api/v2/pokemon/'+pokeName).then(function(response){
        
                       console.log(response);
                      
                       
                       this.setState({
                           name:response.data.name,
                           sprite: response.data.sprites.front_shiny,
                           type:response.data.types[0].type.name
                       })
                    }.bind(this))
        
    };

    changeToNormal=()=>{
        var pokeName = document.getElementById('textBox').value;
        console.log(pokeName);
         axios.get('https://pokeapi.co/api/v2/pokemon/'+pokeName).then(function(response){
        
                       console.log(response.data.sprites.front_default);
                      
                       
                       this.setState({
                           
                           sprite: response.data.sprites.front_default
                       })
                    }.bind(this))
    };

    changeToBack=()=>{
        var pokeName = document.getElementById('textBox').value;
        console.log(pokeName);
         axios.get('https://pokeapi.co/api/v2/pokemon/'+pokeName).then(function(response){
        
                       console.log(response.data.sprites.front_default);
                      
                       
                       this.setState({
                           
                           sprite: response.data.sprites.back_default
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
            <div  id="sideBox"className ="row">
            <div className ="col col-md-3">
            <button type="button" onClick={this.change.bind(this)} id="addButton"class="btn btn-primary changer">Shiny</button>
            <button type="button" onClick={this.changeToNormal.bind(this)} id="addButton"class="btn btn-primary changer">Normal</button>

            <button type="button" onClick ={this.changeToBack.bind(this)} id="addButton"class="btn btn-primary changer">back</button>

            <br>
            </br>
            
            </div>
            <div className ="col col-md-6"><div className = "card" id= "mainBox">
                    <img id ="spriteSize"src={this.state.sprite}  className="card-img-top"></img>
                    <hr></hr>
                    <div className='card-body'>
                        <h1 className='card-text' name='body'>{this.state.name}</h1>
                        <h2>TYPE:  {this.state.type}</h2>
                        <button onClick={this.newPokemon} type="button" id="addButton"class="btn btn-danger">ADD</button>
                        </div>
                    </div>
                </div>
            <div className ="col col-md-2"></div>
            </div></div>
                
            <div id="images" className='row'>
            
            </div>
            </div>
            
        
        </div>;
    }
}

export default TradeSearch;
