import {axiosInstance} from "./axiosInstance.ts";
import {AxiosResponse} from "axios";

function getFormattedDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}${month}${day}`;
}

export function getWeather(): Promise<AxiosResponse<never>> {
  const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${import.meta.env.VITE_WEATHER_KEY}&numOfRows=10&pageNo=5&base_date=${getFormattedDate()}&base_time=0600&nx=55&ny=127&dataType=JSON`
  return axiosInstance.get(url);
}
