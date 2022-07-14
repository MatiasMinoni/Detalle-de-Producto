import React from "react";
import Item from './item';

const Itemlista = ({productos}) => {
    return(
        <>
       {
        productos.map(producto => <Item key={producto.id} producto={producto}/>)
       }
        </>);
};

export default Itemlista