const axios =  require('axios');
const jquery = require('jquery');

function pokeSearch(){
   var pokeName = document.getElementById('textBox').value;
   console.log(pokeName);
    axios.get('https://pokeapi.co/api/v2/pokemon/'+pokeName).then(function(response){
       // var image = response.sprites.front_shiny;
                  //  var body = response.name;
                   console.log(response.data.sprites.front_shiny);
                    
                   function show_image(src, width, height, alt) {
                    var img = document.createElement("img");
                  // img.src = response.data.sprites.front_shiny
                    img.width = '500px';
                    img.height = '500px';
                    img.alt = "howdy";
                
                    // This next line will just add it to the <body> tag
                    document.body.appendChild(img);
                }
                
                
                
                show_image();
                    //pokeImage.attr("src", image);
                    //console.log(pokeImage.attr)

                   document.getElementById("images").appendChild
                   
    })
}



 export default pokeSearch;