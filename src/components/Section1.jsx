import { useState } from "react";
function Section1(props){
    const msg = props.message; // định nghĩa cách nhận dữ liệu
    const stars = props.sts;
    // khai báo 1 state
    const [count,setCount] = useState(0); // let count = 0
    function increment(){
        // tăng giá trị biến count lên
        setCount(count + 1);// hiểu: count = count + 1
        // nạp giá trị mới vào html ở dưới-> tự động ko cần làm gì
    }
    function decrement(){
        if(count > 0)
            setCount(count - 1);
        // setCount(count>0?count-1:0);
    }
    return (
        <div className="container">
            <h2>{msg}</h2>
            <p>Star: {stars}</p>
            <h3>Number: {count}</h3>
            <button onClick={increment} className="btn btn-primary" type="button">Click here</button>
            <button onClick={decrement} className="btn btn-danger" type="button">Click here</button>
        </div>
    )
}
export default Section1;