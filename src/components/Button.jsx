
// tạo ra 1 component giao diện
function Button() { // khai baos hàm thành phần giao diện
    // logic - xử lý sự kiện - biến - hằng - hàm

    // trả về giao diện
    return (   //  nhinf nhu 1 thẻ html - có thể có nhiều thẻ con
    <div>
        <h1>Button component</h1>
        <button>Click me</button>
    </div>
);
}
export default Button; // xuất thành 1 module giao diện - để có thể sử dụng nơi khác