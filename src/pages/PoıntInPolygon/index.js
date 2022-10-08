import React, { useEffect, useRef, useState } from 'react';
import { getCoordinates, HereMapContainer, PolygonDraw, isPointInPolygon } from '@akaribrahim/here-maps-drawing';
import { Box } from '@mui/system';
import Layout from '../layout';
import { hereApiKey } from '../../utils';
import { Typography } from '@mui/material';
import Highlight from 'react-highlight';

const standartIcon = (color, text, isNewOrder, textColor = '#fff') => `
  <svg width="30px" height="30px" viewBox="0 0 10 30" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50%" cy="50%" r="11" stroke="${textColor}" fill="${color}"/>
    <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" dy=".3em" font-size="12" font-weight="200" font-family="Roboto, sans-serif">
      ${text}
    </text>
  </svg>
`;
const samplePoints = [
   { lat: 41.12627393231038, lng: 28.960042128640346 },
   { lat: 41.12255389308406, lng: 29.139501912077133 },
   { lat: 41.033883242894156, lng: 29.123151427705434 },
   { lat: 40.98094452293287, lng: 29.206055236966375 },
   { lat: 41.058654926310936, lng: 29.214396921208706 },
   { lat: 41.12739786778544, lng: 29.225072710525406 },
   { lat: 41.173928406479234, lng: 29.1742785111719 },
   { lat: 41.05038002980761, lng: 28.755412389980354 },
   { lat: 41.09330839993421, lng: 28.786582091804142 },
   { lat: 41.150707075067764, lng: 28.848173485268497 },
   { lat: 41.17867426297687, lng: 28.902457093382523 },
   { lat: 41.23752965364262, lng: 28.963406216323047 },
   { lat: 41.22508592924848, lng: 29.033323628894998 },
   { lat: 41.18197552556545, lng: 29.005122470102044 },
   { lat: 41.08269406127034, lng: 28.99834729933246 },
   { lat: 41.018437203779555, lng: 28.946021833059348 },
   { lat: 41.01281687758614, lng: 28.8861340229966 },
   { lat: 41.038512212617626, lng: 28.896899886837986 },
   { lat: 41.02285452632229, lng: 29.06171276930468 },
   { lat: 41.037490145198774, lng: 29.076085530417043 },
   { lat: 40.98202364067613, lng: 29.077487559975175 },
   { lat: 41.028911242800376, lng: 29.108085484381412 },
   { lat: 41.05876418814532, lng: 28.900177816279722 },
   { lat: 41.09814567897871, lng: 28.812272912757066 },
   { lat: 41.013245363081666, lng: 28.810804306376372 },
];

const { H } = window;

const PointInPolygon = () => {
   const [mapObject, setMapObject] = useState(null);
   const [polygonObjects, setPolygonObjects] = useState([]);
   const markerGroup = useRef();
   const getDescription = (index, obj, description) => {
      return (
         <Box sx={{ my: 2 }} key={index}>
            <Typography sx={{ mb: 1 }}>{description}</Typography>
            <Highlight language="javascript">{obj}</Highlight>
         </Box>
      );
   };
   useEffect(() => {
      if (!mapObject) return;
      const group = new H.map.Group();
      let markers = {};
      samplePoints.forEach((p, i) => {
         const marker = new H.map.Marker(p, {
            icon: new H.map.Icon(standartIcon('red', (i + 1).toString()).trim()),
         });
         markers = { ...markers, [`marker-${i}`]: marker };
      });
      markerGroup.current = markers;
      group.addObjects(Object.values(markers));
      mapObject.addObject(group);
   }, [mapObject]);
   useEffect(() => {
      polygonObjects.forEach((polygon) => {
         const polygonCoordinates = getCoordinates(polygon.getPolygon());
         samplePoints.forEach((point, index) => {
            const isInPolygon = isPointInPolygon(polygonCoordinates, [point.lat, point.lng]);
            if (isInPolygon)
               markerGroup.current[`marker-${index}`].setIcon(
                  new H.map.Icon(standartIcon('blue', (index + 1).toString()).trim())
               );
         });
      });
   }, [polygonObjects]);
   return (
      <Layout>
         <Box sx={{ width: '100%' }}>
            <HereMapContainer
               apiKey={hereApiKey}
               containerStyles={{ height: 400 }}
               onSuccess={(mapObjects) => setMapObject(mapObjects.map)}
            >
               {(mapObjects) => (
                  <PolygonDraw
                     map={mapObjects.map}
                     color="#000"
                     onSuccess={(mainGroup) => setPolygonObjects((state) => [...state, mainGroup])}
                  />
               )}
            </HereMapContainer>
            {getDescription(
               1,
               `
useEffect(() => {
   polygonObjects.forEach((polygon) => {
      const polygonCoordinates = getCoordinates(polygon.getPolygon());
      samplePoints.forEach((point, index) => {
         const isInPolygon = isPointInPolygon(polygonCoordinates, [point.lat, point.lng]);
         if (isInPolygon)
            markerGroup.current[marker-{index}].setIcon(
               new H.map.Icon(standartIcon('blue', (index + 1).toString()).trim())
            );
      });
   });
}, [polygonObjects]);
               `,
               'With saved polygon, use getCoordinates() and isPointInPolygon() functions that are exported from library to check whether if marker in drawn polygon.'
            )}
            {getDescription(
               0,
               `
<HereMapContainer
   apiKey={hereApiKey}
   containerStyles={{ height: 400 }}
   onSuccess={(mapObjects) => setMapObject(mapObjects.map)}
>
   {(mapObjects) => (
      <PolygonDraw
         map={mapObjects.map}
         color="#000"
         onSuccess={(mainGroup) => setPolygonObjects((state) => [...state, mainGroup])}
      />
   )}
</HereMapContainer>
               `,
               'The onSuccess method passes the polygon object each time a polygon is drawn.'
            )}
         </Box>
      </Layout>
   );
};

export default PointInPolygon;
