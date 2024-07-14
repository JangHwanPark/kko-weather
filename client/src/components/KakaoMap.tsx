import React, {useEffect} from 'react';
import {getWeather} from "./apis/getWeather.ts";

const KakaoMap = ({weather, setWeather, position}) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWeather();
        if (response.status === 200) {
          setWeather(response.data.response.body.items.item);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    };

    fetchData();
  }, []);

  // 날씨 정보를 읽기 쉽게 매핑
  const weatherInfo = weather && weather.reduce((acc, item) => {
    switch (item.category) {
      case 'PTY': acc['강수 형태'] = item.obsrValue; break;
      case 'REH': acc['습도'] = item.obsrValue + '%'; break;
      case 'RN1': acc['강수량'] = item.obsrValue + 'mm'; break;
      case 'T1H': acc['기온'] = item.obsrValue + '°C'; break;
      case 'UUU': acc['동서바람'] = item.obsrValue + 'm/s'; break;
      case 'VEC': acc['풍향'] = item.obsrValue + '°'; break;
      case 'VVV': acc['남북바람'] = item.obsrValue + 'm/s'; break;
      case 'WSD': acc['풍속'] = item.obsrValue + 'm/s'; break;
      default: break;
    }
    return acc;
  }, {});

  // 데이터 로딩 중 화면 표시
  if (!weather) return <div>날씨 데이터를 불러오는 중...</div>;

  return (
    <div>
      <p>마커 위치: {position.lat}</p>
      <p>마커 위치: {position.lng}</p>
      {weather ? (
        Object.entries(weatherInfo).map(([key, value]) => (
          <p key={key}>{key}: {value}</p>
        ))
      ) : <p>날씨 데이터 없음</p>}
    </div>
  );
};

export default KakaoMap;
