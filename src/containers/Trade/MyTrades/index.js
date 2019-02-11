import React, {Component} from 'react';
import card from './cards'
import $ from 'jquery';
import './style.css'
import axios from "axios";


export class MyTrades extends Component {



componentDidMount() {



  axios.get("/api/pokemon_collection").then(function(response) {
    console.log(response)

  })
}

render() {

console.log()
return <div>

        <div className="col col-md-6"><div className="card" id="mainBox">
          <img id="spriteSize" src={"this.state.sprite"} className="card-img-top"></img>
          <hr></hr>
          <div className='card-body'>
            <h1 className='card-text' name='body'>{"this.state.name"}</h1>
            <h2>TYPE:  {"Hi"}</h2>
            <button onClick={"this.newPokemon"} type="button" id="addButton" class="btn btn-danger">ADD</button>
          </div>
        </div>
        </div>
        <div className="col col-md-2"></div>


    <div id="images" className='row'>

    </div>
  </div>

}

}

export default MyTrades;
