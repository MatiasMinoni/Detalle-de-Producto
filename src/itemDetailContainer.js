import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';



export const ItemDetailsContainer = () => {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(true)

 
    const promise = new Promise ((res, rej) => {
        setTimeout(() => {
            res("https://fakestoreapi.com/products");
        }, 2000);
    });

    useEffect(() => {
       fetch("https://fakestoreapi.com/products")
       .then(res=>res.json())
       .then(data=>setProduct(data))
       .catch(err=>console.log(err))
       promise.finally(()=>setLoaded(false))
    }, [])

             
   

    return (
        <>
            {loaded ? <p>cargando</p> : 
            <ItemDetail product={product} />}
        </>
    )
}


export default ItemDetailsContainer