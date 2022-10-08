import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapComponent from './pages/HereMapContainer';
import PointInPolygon from './pages/PoıntInPolygon';
import PolygonDrawComponent from './pages/PolygonDraw';

function App() {
   return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
         <Routes>
            <Route index path="/" element={<MapComponent />} />
            <Route path="polygondraw/*" element={<PolygonDrawComponent />} />
            <Route path="/useMarkerInPolygon" element={<PointInPolygon />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
