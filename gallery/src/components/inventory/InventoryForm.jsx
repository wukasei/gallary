// src/components/inventory/InventoryForm.jsx
import { useState } from 'react';

const InventoryForm = ({ onSubmit, initialData = {}, isEdit = false }) => {
  const [name, setName] = useState(initialData.inventory_name || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Назва квітки обов'язкова!");
      return;
    }

    const data = {
      inventory_name: name,
      description: description,
      photo: photo ? URL.createObjectURL(photo) : (initialData.photo || 'https://via.placeholder.com/150')
    };

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="inventory-form">
      <div className="form-group">
        <label>Назва квітки *</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Наприклад: Червона троянда"
        />
      </div>

      <div className="form-group">
        <label>Опис</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Опишіть квіточку..."
        />
      </div>

      <div className="form-group">
        <label>Фото (прев'ю)</label>
        <input 
          type="file" 
          accept="image/*" 
          onChange={(e) => setPhoto(e.target.files[0])} 
        />
      </div>

      <button type="submit" className="btn-save">
        {isEdit ? 'Оновити дані' : 'Створити позицію'}
      </button>
    </form>
  );
};

export default InventoryForm;