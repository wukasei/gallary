import { Routes, Route, Link } from 'react-router-dom'; 
import AdminInventory from './pages/AdminInventory'; 
import AdminInventoryCreate from './pages/AdminInventoryCreate';
import AdminInventoryEdit from './pages/AdminInventoryEdit';
import AdminInventoryDetails from './pages/AdminInventoryDetails';
import Gallery from './pages/Gallery';
import Favorites from './pages/Favorites';
import FavoritesBar from './components/gallery/FavoritesBar'; 

function App() {
  return (
    <div>
      <nav style={{ 
        padding: '15px', 
        background: '#333', 
        color: 'white', 
        display: 'flex', 
        gap: '20px' 
      }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>🌸 Галерея (Головна)</Link>
        <Link to="/admin" style={{ color: 'white', textDecoration: 'none' }}>⚙️ Адмінка</Link>
        <Link to="/favorites" style={{ color: 'white', textDecoration: 'none' }}>❤️ Улюблені</Link>.
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Gallery />} /> 
          <Route path="/admin" element={<AdminInventory />} />
          <Route path="/admin/create" element={<AdminInventoryCreate />} />
          <Route path="/admin/edit/:id" element={<AdminInventoryEdit />} />
          <Route path="/admin/details/:id" element={<AdminInventoryDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;