import React from 'react';

function card(){
    var body = ''
    return (
        <div className = "card" style="width:18rem;"><img src ={Image} className = "card-img-top"></img> 
        <div className = 'card-body'><h5 className= "card-title">{body}</h5> <p className="card-text">pokemon</p></div>
        
        </div>
    )
}

export default card;