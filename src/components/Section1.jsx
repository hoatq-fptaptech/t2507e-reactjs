import { useState } from "react";
function Section1(props){
    const msg = props.message; // định nghĩa cách nhận dữ liệu
    const stars = props.sts;
    // khai báo 1 state
    const [count,setCount] = useState(0); // let count = 0
    return (
        <div className="container">
            <h2>{msg}</h2>
            <p>Star: {stars}</p>
            <h3>Number: {count}</h3>
            <button className="btn btn-primary" type="button">Click here</button>
        </div>
    )
}
export default Section1;