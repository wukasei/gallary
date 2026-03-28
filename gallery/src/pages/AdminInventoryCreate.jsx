// src/pages/AdminInventoryCreate.jsx
import { useNavigate } from 'react-router-dom';
import { inventoryApi } from '../services/inventoryApi';
import InventoryForm from '../components/inventory/InventoryForm';

const AdminInventoryCreate = () => {
  const navigate = useNavigate(); 

  const handleCreate = async (formData) => {
    try {
      await inventoryApi.createItem(formData);
      
      alert("Квіточку успішно додано до складу! 🌸");
      
      navigate('/admin'); 
    } catch (error) {
      console.error("Помилка при створенні:", error);
      alert("Не вдалося створити запис.");
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>🆕 Додати нову позицію</h2>
        <button className="btn-back" onClick={() => navigate('/admin')}>
          ← Назад до списку
        </button>
      </div>

      <div className="form-wrapper">
        <InventoryForm onSubmit={handleCreate} />
      </div>
    </div>
  );
};

export default AdminInventoryCreate;