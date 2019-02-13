import React, {Component} from 'react';
import card from './cards'
import $ from 'jquery';
import './style.css'
import axios from "axios";


export class MyTrades extends Component {


  state = {
    pokemons: []
  }

  componentDidMount() {
    axios.get(`/api/pokemon_collection`)
      .then(res => {
        const pokemons = res.data;
        this.setState({ pokemons });
        console.log(res.data);
      })
  }

  render() {
    return (
      
      <ul>
        { this.state.pokemons.map(pokemon => <li>{pokemon.name}</li>)}
        <hr></hr>
        { this.state.pokemons.map(pokemon => <li>{pokemon.sprite}</li>)}
        <hr></hr>
        { this.state.pokemons.map(pokemon => <li>{pokemon.type}</li>)}

      </ul>
      


      
    )
  }
}

export default MyTrades;
