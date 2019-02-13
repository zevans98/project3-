import React, {Component} from 'react';
import card from './cards'
import $ from 'jquery';
import './style.css'
import axios from "axios";
import { dim } from 'ansi-colors';
import { domainToUnicode } from 'url';
import { types } from 'util';
import pokeSearch from './../TradeSearch/search';
import { $for } from 'core-js';


export class MyTrades extends Component {


  state = {
    pokemons: []
  }

  componentDidMount() {
    axios.get(`/api/pokemon_collection`)
      .then(res => {
        const pokemons = res.data;
        this.setState({ pokemons });
        console.log(pokemons)
      });

  };
 
  

  
  myFunction =(item,index)=>{
    var pokeBody = $('<div className="col col-md-4"<div  id="mainBox" class="card" style="width: 18rem;"><img src='+this.state.pokemons[index].sprite+' class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+this.state.pokemons[index].name+'</h5><p class="card-text">'+this.state.pokemons[index].type+'</p></div></div></div>')
  console.log(this.state.pokemons[index].name);
  $('#displayPokemon').append(pokeBody)
}
  
  render() {
      
      return (
     
      <div>
        <div className="container-fluid" >

        <div  id="displayPokemon" className= 'row'>
        
        </div>
        
        
        </div>

          {this.state.pokemons.forEach(this.myFunction)}
        

          

      </div>
      
    )
  }
}

export default MyTrades;
