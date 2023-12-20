import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const TrackMap = () => {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [43.257412, 76.940789], zoom: 9 }}
        width="100%"
        height="400px"
      >
        <Placemark geometry={[43.257412, 76.940789]} />
      </Map>
    </YMaps>
  );
};

export default TrackMap;
