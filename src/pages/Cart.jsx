import { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import StoreContext from "../store/StoreContext";
import { Link } from "react-router-dom";

function Cart(){
    const {store,setStore} = useContext(StoreContext);
    const cart = store.cart;
    return (
        <Container>
            <Table hover={true} striped={true}>
                <thead>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                </thead>
                <tbody>
                    {
                        cart.map((e,k)=>{
                            return <tr key={k}>
                                <td>{k+1}</td>
                                <td><img src={e.thumbnail} width={75}/></td>
                                <td>{e.name}</td>
                                <td>{e.price}</td>
                                <td>{e.buy_qty}</td>
                                <td>{e.buy_qty * e.price}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
            <Link className="btn btn-primary" to={"/checkout"}>Checkout</Link>
        </Container>
    );
}
export default Cart;