// components/MapComponent.jsx
import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const center = {
  // 지도의 중심좌표
  lat: 33.450701,
  lng: 126.570667,
}

const MapComponent = (
  {
    data,
    position,
    setPosition
  }) => {

  if (!data) return null;

  // 지도 클릭한 위치에 마커 출력
  return (
    <Map
      center={{ lat: 37.5665, lng: 126.9780 }}
      style={{ width: '100%', height: '360px' }}
      level={7}
      onClick={(_, mouseEvent) => {
        const latlng = mouseEvent.latLng;
        console.log(latlng)
        setPosition({
          lat: latlng.getLat(),
          lng: latlng.getLng()
        })
      }}
    >
      <MapMarker position={position ?? center} />
    </Map>
  );
}

export default MapComponent;
