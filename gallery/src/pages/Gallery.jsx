import { useEffect, useState } from 'react';
import { inventoryApi } from '../services/inventoryApi';
import InventoryQuickView from '../components/gallery/InventoryQuickView';
import InventoryGallery from '../components/gallery/InventoryGallery';
import InventoryCard from '../components/gallery/InventoryCard';
import useFavorites from './../hooks/useFavorites';
import '../App.css'; 

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const { favorites, toggleFavorite } = useFavorites();
  
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


  if (loading) return <div className="admin-container">🌸 Завантаження...</div>;

  return (
    <div className="gallery-container">
      <h2>🌸 Наша Квіткова Колекція</h2>
      <InventoryGallery 
        items={items} 
        favorites={favorites} 
        onToggleFavorite={toggleFavorite} 
        onCardClick={(flower) => setSelectedItem(flower)}
      />
      {selectedItem && (
        <InventoryQuickView 
          item={selectedItem} 
          favorites={favorites} 
          onToggleFavorite={toggleFavorite} 
          onClose={() => setSelectedItem(null)} 
        />
      )}

      {items.length === 0 && <p>Квітів поки немає...</p>}
    </div>
  );
};

export default Gallery;