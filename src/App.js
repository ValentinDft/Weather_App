import { Routes, Route } from 'react-router-dom';

// Components
import Home from './Components/Home';
import Weather from './Components/Weather';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/city/:id" element={<Weather/>} />
      {/* Ajouter un composant erreur 404 */}
      <Route path="/city/*" element={<Weather/>} />
    </Routes>
  );
}

export default App;
