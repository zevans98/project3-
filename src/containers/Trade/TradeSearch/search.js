import { types } from 'util';

const axios =  require('axios');

const $ = require('jquery');



function pokeSearch(){
   var pokeName = document.getElementById('textBox').value;
   console.log(pokeName);
    axios.get('https://pokeapi.co/api/v2/pokemon/'+pokeName).then(function(response){
       // var image = response.sprites.front_shiny;
                  //  var body = response.name;
                  console.log(response);
                   console.log(response.data.types[0].type.name);
                     var types = response.data.types[0].type.name;
                   var image = response.data.sprites.front_shiny;
                   var body = response.data.name;
                   var pokeImage = $('<div id="sprites"style="border:solid;margin-top:5%;background-color:white" class="col-md-4" <div class="card" style="width: 18rem;"><img src="'+image+' " class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+body+'</h5><p class="card-text">TYPE:  '+types+'</p><button type="button" class="btn btn-danger">ADD</button></</div> </div></div> ');

                   //pokeImage.attr("src", image);
                   console.log(pokeImage.attr)


                    //pokeImage.attr("src", image);
                    //console.log(pokeImage.attr)


                   $("#images").append(pokeImage);
    })
}



 export default pokeSearch;