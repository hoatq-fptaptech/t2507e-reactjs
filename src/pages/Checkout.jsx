import { useContext } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import StoreContext from "../store/StoreContext";

function Checkout(){
    const {store,setStore} = useContext(StoreContext);
    const cart = store.cart;
    const createOrder = async ()=>{
        const dataToSend = {
            customer_name:"Quang Hoa",
            customer_tel: "0987654321",
            customer_address: "13b Trinh Van Bo",
            payment_method: "COD",
            cart: cart
        }
        const url = "http://localhost:8888/api/v1/create_order.php";
        const rs = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(dataToSend)
        });

    }
    return (
        <Container>
            <Row>
                <Col xs={6}>
                    <div className="mb-3">
                        <label>Name</label>
                        <input type="text" name="customer_name" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label>Tellephone</label>
                        <input type="tel" name="customer_tel" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label>Address</label>
                        <textarea name="customer_address" className="form-control"></textarea>
                    </div>
                     <div className="mb-3">
                        <label>Payment Method</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="PAYPAL" name="payment_method" id="radioDefault1"/>
                            <label className="form-check-label" for="radioDefault1">
                                Paypal
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" value="COD" name="payment_method" id="radioDefault2"/>
                            <label className="form-check-label" for="radioDefault2">
                                COD
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <Button onClick={createOrder} type="button" variant="primary">Place order</Button>
                    </div>
                </Col>
                <Col xs={6}>
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
                </Col>
            </Row>
            
        </Container>
    );
}
export default Checkout;