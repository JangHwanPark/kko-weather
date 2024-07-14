// App.jsx
import React, { useState } from "react";
import MapComponent from "./MapComponent";
import WeatherInfo from "./WeatherInfo.tsx";

function App() {
  const [weather, setWeather] = useState(null);
  const [position, setPosition] = useState<{
    lat: number
    lng: number
  }>()

  return (
    <div className='lg:m-32'>
      <h2 className='text-2xl text-center font-bold'>카카오 날씨</h2>
      <div className='flex sm:flex-col lg:gap-2.5 lg:flex-row lg:justify-between'>
        <div className='w-full lg:w-[600px]'>
          <h2 className='text-2xl font-bold text-center'>지도</h2>
          <MapComponent
            data={weather}
            position={position}
            setPosition={setPosition}
          />
        </div>
        <div className='lg:w-[600px]'>
          <h2 className='text-2xl font-bold text-center'>날씨 정보</h2>
          <WeatherInfo
            weather={weather}
            setWeather={setWeather}
            position={position}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
