import React, { useEffect, useState } from 'react';
import { inventoryApi } from '../services/inventoryApi';
import useFavorites from '../hooks/useFavorites';
import InventoryGallery from '../components/gallery/InventoryGallery';
import '../App.css';

const Favorites = () => {
  const [allFlowers, setAllFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await inventoryApi.getInventory();
        setAllFlowers(response.data);
      } catch (err) {
        console.error("Помилка завантаження:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  const favoriteFlowers = allFlowers.filter(flower => 
    favorites.includes(flower.id)
  );

  if (loading) return <div className="admin-container">🌸 Шукаємо ваші улюблені квіти...</div>;

  return (
    <div className="gallery-container">
      <h2>❤️ Ваші Улюблені Квіти</h2>
      
      {favoriteFlowers.length > 0 ? (
        <InventoryGallery 
          items={favoriteFlowers} 
          favorites={favorites} 
          onCardClick={(flower) => console.log("Клік по:", flower)} 
          onToggleFavorite={toggleFavorite}
        />
      ) : (
        <div className="empty-favorites">
          <p>Ви ще не додали жодної квітки до улюблених... 🤍</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;