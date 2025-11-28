import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import StoreContext from "../store/StoreContext";

function Detail(){
    const [product,setProduct] = useState({});
    const {id} = useParams();
    const get_prod = async ()=>{
        const url = "http://localhost:8888/api/v1/product_detail.php?id="+id;
        // fetch
        const rs = await fetch(url);
        const data = await rs.json();
        setProduct(data.data);
    }
    useEffect(function(){
        get_prod();
    },[id]);
    const handleQty = (e)=>{
        setProduct({...product,buy_qty:e.target.value});
    } 
    const {store,setStore} = useContext(StoreContext);
    const addToCart = ()=>{
        const cart = store.cart;
        let existed = false;
        product.buy_qty = product.buy_qty??1;
        cart.map(e=>{
            if(e.id == product.id){
                e.buy_qty = e.buy_qty + product.buy_qty;
                existed = true;
                return e;
            }
        })
        if(existed === false)
            cart.push(product);
        setStore({...store,cart:cart});
    }
    return (
        <Container>
            <h1>{product.name}</h1>
            <img src={product.thumbnail} />
            <input onChange={handleQty} type="number" value={product.buy_qty??1} name="buy_qty" className="form-control" />
            <button onClick={addToCart} type="button" className="btn btn-primary">Add to cart</button>
        </Container>
    )
}
export default Detail;