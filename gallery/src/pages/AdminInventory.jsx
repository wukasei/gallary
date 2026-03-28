// src/pages/AdminInventory.jsx
import { useEffect, useState } from 'react';
import { inventoryApi } from '../services/inventoryApi';
import { Link } from 'react-router-dom';
import InventoryTable from '../components/inventory/InventoryTable';
import '../App.css'; 
import ConfirmModal from '../components/inventory/ConfirmModal';

const AdminInventory = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const fetchInventory = async () => {
    try {
      const response = await inventoryApi.getInventory();
      setItems(response.data);
    } catch (err) {
      console.error(`Помилка завантаження ${err}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const openDeleteModal = (id) => {
    setDeletingId(id);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await inventoryApi.deleteItem(deletingId);
      setItems(items.filter(item => item.id !== deletingId));
      setIsModalOpen(false); 
    } catch (err) {
      alert(`Помилка при видаленні ${err}`);
    }
  };

  if (loading) return <div className="admin-container">🌸 Завантаження...</div>;

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>📦 Управління складом</h2>
        <Link to="/admin/create" className="btn-add">+ Додати товар</Link>
      </div>

      {items.length === 0 ? (
        <p>Склад порожній.</p>
      ) : (
        <InventoryTable items={items} onDelete={openDeleteModal} />
      )}

      <ConfirmModal 
        isOpen={isModalOpen}
        title="Видалення квітки"
        message="Ви точно хочете видалити цю красу? Цю дію неможливо буде скасувати."
        onConfirm={confirmDelete}
        onCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default AdminInventory;