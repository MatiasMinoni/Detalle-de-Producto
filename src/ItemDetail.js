import React from "react";
import { Link } from "react-router-dom";
import MiComponente from "./ItemCount";
const ItemDetail = ({product}) => {

  
    return (
      <div key="id" class="row ">
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img  src={product[0].image} alt=""></img>
                <span  class="card-title">{product[0].title}</span>
              </div>
              <div class="card-content">
                <p >Precio: {product[0].price}</p>
                <p >{product[0].description}</p> 
               
              </div>
              <div class="card-action">
                <a href="/Carrito">Comprar</a>
             
              </div>
              
            </div>
          
          </div>
          <MiComponente />
        </div>
    );
  };
  

export default ItemDetail 
