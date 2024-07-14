import React, {useEffect} from 'react';
import {axiosInstance} from "../../apis/axiosInstance.js";



const WeatherInfo = ({weather, setWeather}) => {
  useEffect(() => {
    const weatherData = async () => {
      const url = `https://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${import.meta.env.VITE_WEATHER_MIDLAND}&pageNo=1&numOfRows=10&dataType=JSON&regId=11B00000&tmFc=202407140600`
      const response = await axiosInstance(url)
      setWeather(response.data.response.body)
      // console.log(response.data.response.body)
    }

    weatherData();
  }, []);

  console.log(weather)
  
  if (!weather) {
    return <div>데이터 로딩중</div>
  }

  return (
    <div>
      {weather && weather.items.item.map(item => (
        <div key={item.regId}>
          <div>{item.regId}</div>
        </div>
      ))}
    </div>
  );
};

export default WeatherInfo;
