import { HereMapContainer } from '@akaribrahim/here-maps-drawing';
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
         <Highlight language="javascript">{obj}</Highlight>
      </Box>
   );
};
const MapComponent = () => {
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
   return (
      <Layout>
         <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
               <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Basic Map" {...a11yProps(0)} />
                  <Tab label="Container Styles" {...a11yProps(1)} />
                  <Tab label="Center and Zoom" {...a11yProps(2)} />
                  <Tab label="Events-UI Disabled" {...a11yProps(3)} />
                  <Tab label="Map Language" {...a11yProps(4)} />
               </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
               {getDescription(
                  0,
                  '<HereMapContainer apiKey={hereApiKey} />',
                  'The only thing required for the map component to work is apiKey'
               )}
               <HereMapContainer apiKey={hereApiKey} />
            </TabPanel>
            <TabPanel value={value} index={1}>
               {getDescription(
                  1,
                  '<HereMapContainer apiKey={hereApiKey} containerStyles={{ height: 400, width: 350 }} />',
                  'Definitions made as containerStyles are transferred to the div surrounding the map.'
               )}
               <HereMapContainer apiKey={hereApiKey} containerStyles={{ height: 400, width: 350 }} />
            </TabPanel>
            <TabPanel value={value} index={2}>
               {getDescription(
                  2,
                  '<HereMapContainer apiKey={hereApiKey} center={{ lat: 12, lng: 33 }} zoom={10} />',
                  'We can specify the coordinates and zoom level where the map will be loaded first.'
               )}
               <HereMapContainer apiKey={hereApiKey} center={{ lat: 12, lng: 33 }} zoom={10} />
            </TabPanel>
            <TabPanel value={value} index={3}>
               {getDescription(
                  3,
                  '<HereMapContainer apiKey={hereApiKey} useEvents={false} useUi={false} />',
                  'When you disable the events and ui props of the map you will get a static map'
               )}
               <HereMapContainer apiKey={hereApiKey} useEvents={false} useUi={false} />
            </TabPanel>
            <TabPanel value={value} index={4}>
               {getDescription(
                  4,
                  '<HereMapContainer apiKey={hereApiKey} mapLanguage="tr-TR" />',
                  'You can change the language of the map. You can see the language change in the map settings section at the bottom right.'
               )}
               <HereMapContainer apiKey={hereApiKey} mapLanguage="tr-TR" />
            </TabPanel>
         </Box>
      </Layout>
   );
};

export default MapComponent;
