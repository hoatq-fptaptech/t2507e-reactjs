import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail(){
    const [product,setProduct] = useState({});
    const {id} = useParams();
    const get_prod = ()=>{
        const url = "https://dummyjson.com/product/"+id;
        // fetch
    }
    useEffect(function(){
        get_prod();
    },[id]);
    return (
        <Container>
            <h1>Product ID: {id}</h1>
        </Container>
    )
}
export default Detail;