import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { inventoryApi } from '../services/inventoryApi';
import '../App.css';

const AdminInventoryEdit = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    inventoryApi.getInventory() 
      .then(res => {
        const found = res.data.find(flower => flower.id === id);
        setItem(found);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleUpdateText = async (e) => {
    e.preventDefault();
    const updatedData = {
      inventory_name: item.inventory_name,
      description: item.description
    };

    try {
      await inventoryApi.updateText(id, updatedData);
      alert("Текст оновлено! ✅");
    } catch (err) {
      alert(`Помилка при оновленні фото ${err}`);
    }
  };

  const handleUpdatePhoto = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const newPhotoUrl = URL.createObjectURL(file);

    try {
      await inventoryApi.updatePhoto(id, newPhotoUrl);
      setItem({ ...item, photo: newPhotoUrl }); 
      alert("Фото оновлено! 📸");
    } catch (err) {
      alert(`Помилка при оновленні фото ${err}`);
    }
  };

  if (loading) return <div>Завантаження...</div>;
  if (!item) return <div>Квітку не знайдено</div>;

  return (
    <div className="admin-container">
      <h2>✏️ Редагування: {item.inventory_name}</h2>
      <button onClick={() => navigate('/admin')} className="btn-back">← Назад</button>

      <div className="edit-sections">
        <form onSubmit={handleUpdateText} className="edit-card">
          <h3>1. Текстові дані</h3>
          <div className="form-group">
            <label>Назва</label>
            <input 
              type="text" 
              value={item.inventory_name} 
              onChange={(e) => setItem({...item, inventory_name: e.target.value})} 
            />
          </div>
          <div className="form-group">
            <label>Опис</label>
            <textarea 
              value={item.description} 
              onChange={(e) => setItem({...item, description: e.target.value})} 
            />
          </div>
          <button type="submit" className="btn-save">Зберегти текст</button>
        </form>

        <div className="edit-card">
          <h3>2. Зображення</h3>
          <img src={item.photo} alt="Current" className="edit-preview" />
          <div className="form-group">
            <input type="file" onChange={handleUpdatePhoto} />
          </div>
          <p><small>Фото оновиться відразу після вибору файлу</small></p>
        </div>
      </div>
    </div>
  );
};

export default AdminInventoryEdit;