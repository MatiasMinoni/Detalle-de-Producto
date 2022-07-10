import React from "react";

const ItemDetail = ({detail}) => {


    return(
        <div key="id" class="row ">
        <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img  src=""  alt=""></img>
              <span  class="card-title">Titulo</span>
            </div>
            <div class="card-content">
              <p >Precio: producto.price</p>
              <p >producto.description</p> 
              <p >producto.rating</p> 
            </div>
            <div class="card-action">
              <a href="id">Ver mas</a>
            </div>
          </div>
        </div>
      </div>
      
    )
}


export default ItemDetail