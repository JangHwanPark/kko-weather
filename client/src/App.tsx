// App.jsx
import React, {useState} from "react";
import Navbar from "./components/Navbar.tsx";
import WeatherInfo from "./feature/Weather/WeatherInfo.tsx";

function App() {
  const [weather, setWeather] = useState(null);



  return (
    <div className='lg:m-32'>
      <h2 className='text-2xl text-center font-bold'>카카오 날씨</h2>
      <Navbar/>
      <WeatherInfo weather={weather} setWeather={setWeather}/>
    </div>
  );
}

export default App;
