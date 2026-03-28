// src/pages/AdminInventoryDetails.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { inventoryApi } from '../services/inventoryApi';
import InventoryDetails from '../components/inventory/InventoryDetails';

const AdminInventoryDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    inventoryApi.getInventory()
      .then(res => {
        const found = res.data.find(flower => Number(flower.id) === Number(id)); 
        console.log("Шукаємо ID:", id, "Тип ID:", typeof id);
        console.log("Знайдено об'єкт:", found);
        setItem(found);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="admin-container">Завантаження...</div>;
  if (!item) return <div className="admin-container">⚠️ Квітку не знайдено!</div>;

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>Детальна інформація</h2>
        <button className="btn-back" onClick={() => navigate('/admin')}>
          ← Назад до таблиці
        </button>
      </div>

      <InventoryDetails item={item} />
    </div>
  );
};

export default AdminInventoryDetails;