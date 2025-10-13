import { useState } from "react";

function Register(){
    const [user,setUser] = useState(
        {
            fullName:"",
            email:"",
            password:""
        }
    );
    // arrow function
    const handleInput = (e)=>{ // cũng như viết kiểu function()...
        const v = e.target.value; // lấy giá trị của input đang được typing...
        const n = e.target.name; // lấy name của input
        setUser({...user,[n]:v});
        //user[n] = v; // user.fullName = v. user.email = v... 
       // setUser(user);
    }
    const formSubmit = (e)=>{
        e.preventDefault(); // chặn form ko submit kiểu truyền thống

        if(confirm("Xác nhận gửi thông tin?")){
            // VD: xử lý dữ liệu để gửi lên backend bằng API
            alert("Đã gửi thành công");
        }else{
            alert("Không gửi...");
        }
    }
    return (
        <>
            <h1>Register</h1>
            <h2>Full name: {user.fullName}</h2>
            <form onSubmit={formSubmit} action="#" method="post">
                <div className="mb-3">
                    <label>Full name</label>
                    <input onChange={handleInput} type="text" value={user.fullName} name="fullName" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input onChange={handleInput} value={user.email} type="email" name="email" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input onChange={handleInput} value={user.password} type="password" name="password" className="form-control"/>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
        </>
    );
}
export default Register;