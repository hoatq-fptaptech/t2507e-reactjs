import { useEffect, useState } from "react";

function Weather(){
    const [data,setData] = useState(
        {   city:"HN",
            temp:30,
            humidity:50,
            pressure:1000
        }
    );
    function getWeather(){ // gọi dữ liệu từ api về nạp vào biến data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
        fetch(url).then(rs=>rs.json())
        .then(function(dt){
            const x = {
                city: dt.name,
                temp: dt.main.temp,
                humidity: dt.main.humidity,
                pressure: dt.main.pressure
            }
            setData(x);
        });
    }

    useEffect(function(){
        // chạy hàm getWeather ddeer lấy dữ liệu về sau khi có UI
        getWeather();
    },[]); 
    // [] nghĩa là danh sách state lắng nghe, 
    // để trống nghĩa là ko lắng nghe state nào cả
    // và như thế sẽ chạy 1 LẦN DUY NHẤT ngay sau khi render UI xong
    
    return (
        <>
            <h2>{data.city}</h2>
            <h3>Nhiệt độ: {data.temp}<sup>o</sup>C</h3>
            <h4>Độ ẩm: {data.humidity}%</h4>
            <h4>Áp suất: {data.pressure}</h4>
        </>
    );
}
export default Weather;