import { Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import Product from "../components/Product";
import { useEffect, useState } from "react";

function Category(){
    const [categories,setCategories] = useState([]);
    const [products,setProducts] = useState([]);
    const get_cat = async ()=>{
        // const url = "https://dummyjson.com/product/categories";
        // fetch(url) // chờ...
        // .then(rs=>rs.json())
        // .then(data=>{
        //     setCategories(data);
        // });
        const url = "https://dummyjson.com/product/categories";
        const rs = await fetch(url); // chờ
        const data = await rs.json(); // chờ
        setCategories(data);
    }
    const get_prod = ()=>{
        const url = "https://dummyjson.com/product/category/beauty";
        fetch(url).then(rs=>rs.json())
        .then(data=>{
            setProducts(data.products);
        })
    }
    useEffect(function(){
        get_cat();
        get_prod();
    },[]);
    const change_cat = (slug)=>{
        const url = "https://dummyjson.com/product/category/"+slug;
        fetch(url).then(rs=>rs.json())
        .then(data=>{
            setProducts(data.products);
        })
    }
    return (
        <div className="container">
            
            <Row>
                <Col xs={4}>
                    <h4>Shop By Category</h4>
                    <ListGroup>
                        {
                            categories.map((e,i)=>{
                                return (
                                    <ListGroup.Item onClick={()=>change_cat(e.slug)} key={i}>{e.name}</ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>
                </Col>
                <Col xs={8}>
                    <h1>Shop By Category</h1>
                    <Row>
                        {
                            products.map((e,k)=>{
                                return (
                                    <Col xs={3} key={k}>
                                        <Product product={e}/>
                                    </Col>
                                );
                            })
                        }
                        
                        
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
export default Category;