import React from 'react';
import InventoryCard from './InventoryCard';

const InventoryGallery = ({ items, favorites, onToggleFavorite, onCardClick }) => {
  return (
    <div className='gallery-grid'>
      {items.map((item) => (
        <InventoryCard 
          key={item.id} 
          item={item} 
          isFavorite={favorites.includes(item.id)}
          onToggleFavorite={onToggleFavorite}
          onClick={() => onCardClick(item)} 
        />
      ))}
    </div>
  );
};

export default InventoryGallery;