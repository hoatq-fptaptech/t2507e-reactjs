import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product(props){
    const product = props.product;
    return (
        <Card className="mt-3 mb-3">
            <Card.Img variant="top" src={product.thumbnail}/>
            <Card.Body>
                <h5>
                    <Link to={"/product/"+product.id}>{product.name}</Link>
                </h5>
                <p>${product.price}</p>
            </Card.Body>
        </Card>
    );
}
export default Product;