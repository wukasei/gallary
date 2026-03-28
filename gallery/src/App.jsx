import { Routes, Route, Link } from 'react-router-dom'; // Додали Link
import AdminInventory from './pages/AdminInventory'; 
import AdminInventoryCreate from './pages/AdminInventoryCreate';
import AdminInventoryEdit from './pages/AdminInventoryEdit';
import AdminInventoryDetails from './pages/AdminInventoryDetails';

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
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={
            <div>
              <h1>Вітаємо у квітковій галереї!</h1>
              <p>Тут згодом будуть гарні картки з квітами (Лаба 8).</p>
            </div>
          } />
          
          <Route path="/admin" element={<AdminInventory />} />
          <Route path="/admin/create" element={<AdminInventoryCreate />} />
          <Route path="/admin/edit/:id" element={<AdminInventoryEdit />} />
          <Route path="/admin/details/:id" element={<AdminInventoryDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;