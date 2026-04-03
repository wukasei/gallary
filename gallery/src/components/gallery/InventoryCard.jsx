import React from 'react';

// Приймаємо все через пропси від батька (Gallery)
const InventoryCard = ({ item, onClick, isFavorite, onToggleFavorite }) => {
  return (
    <div className='flower-card' onClick={onClick}>
      <div className="card-image-container">
        <img src={item.photo} alt={item.inventory_name} className="card-img" />
        
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation(); 
            onToggleFavorite(item.id); 
          }}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="card-content">
        <h3>{item.inventory_name}</h3>
      </div>
    </div>
  );
};

export default InventoryCard;