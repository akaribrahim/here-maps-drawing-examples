import { defaultDrawingStyles, HereMapContainer, PolygonDraw } from '@akaribrahim/here-maps-drawing';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import { hereApiKey } from '../../utils';
import Layout from '../layout';
import Highlight from 'react-highlight';
const TabPanel = ({ children, value, index, ...other }) => (
   <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
   >
      {value === index && (
         <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
         </Box>
      )}
   </div>
);
function a11yProps(index) {
   return {
      id: `map-tab-${index}`,
      'aria-controls': `map-tabpanel-${index}`,
   };
}
const getDescription = (index, obj, description) => {
   return (
      <Box sx={{ mb: 2 }} key={index}>
         <Typography sx={{ mb: 1 }}>{description}</Typography>
         <Highlight language="javascript">{obj.trim()}</Highlight>
      </Box>
   );
};
const PolygonDrawComponent = () => {
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
   return (
      <Layout>
         <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
               <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Default Polygon Draw" {...a11yProps(0)} />
                  <Tab label="Just Color" {...a11yProps(1)} />
                  <Tab label="Drawing Styles" {...a11yProps(2)} />
                  <Tab label="Use Shortcuts" {...a11yProps(3)} />
                  <Tab label="Modifying Shortcuts" {...a11yProps(4)} />
               </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
               {getDescription(
                  0,
                  `
<HereMapContainer apiKey={hereApiKey} >
   {(mapObjects) => <PolygonDraw map={mapObjects.map} />}
</HereMapContainer>
                  `,
                  'PolygonDraw with default props. It requires map object only and the map object will be pass to childrens from HereMapContainer.'
               )}
               <HereMapContainer apiKey={hereApiKey}>
                  {(mapObjects) => <PolygonDraw map={mapObjects.map} />}
               </HereMapContainer>
            </TabPanel>
            <TabPanel value={value} index={1}>
               {getDescription(
                  1,
                  `
<HereMapContainer apiKey={hereApiKey}>
   {(mapObjects) => <PolygonDraw map={mapObjects.map} color="#000" />}
</HereMapContainer>
                  `,
                  'Color prop for just changing color without messing with all the style settings.'
               )}
               <HereMapContainer apiKey={hereApiKey}>
                  {(mapObjects) => <PolygonDraw map={mapObjects.map} color="#000" />}
               </HereMapContainer>
            </TabPanel>
            <TabPanel value={value} index={2}>
               {getDescription(
                  2,
                  `
<HereMapContainer apiKey={hereApiKey}>
   {(mapObjects) => (
      <PolygonDraw
         map={mapObjects.map}
         drawingStyles={{
            ...defaultDrawingStyles,
            movingPolylineStyles: {
               lineWidth: 5,
               strokeColor: '#47577b',
               lineJoin: 'round',
               lineDash: [2],
               lineDashOffset: 1,
            },
         }}
      />
   )}
</HereMapContainer>
                  `,
                  'Default Drawing Styles are exported from the library. Using it you can change certain things or set a completely new style.'
               )}
               <HereMapContainer apiKey={hereApiKey}>
                  {(mapObjects) => (
                     <PolygonDraw
                        map={mapObjects.map}
                        drawingStyles={{
                           ...defaultDrawingStyles,
                           movingPolylineStyles: {
                              // The line following mouse movements
                              lineWidth: 5,
                              strokeColor: '#47577b',
                              lineJoin: 'round',
                              lineDash: [2],
                              lineDashOffset: 1,
                           },
                        }}
                     />
                  )}
               </HereMapContainer>
            </TabPanel>
            <TabPanel value={value} index={3}>
               {getDescription(
                  3,
                  `
<HereMapContainer apiKey={hereApiKey}>
   {(mapObjects) => <PolygonDraw map={mapObjects.map} useShortcuts={false} />}
</HereMapContainer>
                  `,
                  'By default, shortcuts are used. To disable, set the useShortcuts prop to false.'
               )}
               <HereMapContainer apiKey={hereApiKey}>
                  {(mapObjects) => <PolygonDraw map={mapObjects.map} useShortcuts={false} />}
               </HereMapContainer>
            </TabPanel>
            <TabPanel value={value} index={4}>
               {getDescription(
                  4,
                  `
<HereMapContainer apiKey={hereApiKey} >
   {(mapObjects) => (
      <PolygonDraw
         map={mapObjects.map}
         shortcuts={{
            undo: { keyCode: 66, char: 'B' },
            merge: { keyCode: 84, char: 'T' },
            cancel: { keyCode: 67, char: 'C' },
         }}
         onShortcutCallback={(data) => console.log(data)}
      />
   )}
</HereMapContainer>
                  `,
                  'You can change the default shortcuts.'
               )}
               <HereMapContainer apiKey={hereApiKey}>
                  {(mapObjects) => (
                     <PolygonDraw
                        map={mapObjects.map}
                        shortcuts={{
                           undo: {
                              keyCode: 66,
                              char: 'B',
                           },
                           merge: {
                              keyCode: 84,
                              char: 'T',
                           },
                           cancel: {
                              keyCode: 67,
                              char: 'C',
                           },
                        }}
                        onShortcutCallback={(data) => console.log(data)}
                     />
                  )}
               </HereMapContainer>
            </TabPanel>
         </Box>
      </Layout>
   );
};

export default PolygonDrawComponent;
