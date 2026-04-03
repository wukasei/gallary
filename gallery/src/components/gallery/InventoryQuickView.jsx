import React from 'react';
import '../../App.css'; 

// Приймаємо favorites та onToggleFavorite від батька
const InventoryQuickView = ({ item, onClose, favorites, onToggleFavorite }) => {
  if (!item) return null;
  
  // Рахуємо статус на основі отриманого списку
  const isFavorite = favorites.includes(item.id); 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="quickview-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="quickview-flex">
          <div className="quickview-image">
            <img src={item.photo} alt={item.inventory_name} />
          </div>

          <div className="quickview-info">
            <h2>{item.inventory_name}</h2>
            <div className="divider"></div>
            <p className="quickview-description">{item.description}</p>
            
            <button 
              className={`btn-add-fav ${isFavorite ? 'active' : ''}`}
              onClick={() => onToggleFavorite(item.id)} // Тиснемо — і Gallery це побачить
            >
              {isFavorite ? 'Прибрати з улюблених 🤍' : 'Додати в улюблені ❤️'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryQuickView;