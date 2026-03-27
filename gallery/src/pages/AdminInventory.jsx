import { useEffect, useState } from 'react';
import { inventoryApi } from '../services/inventoryApi';

const AdminInventory = () => {
    console.log("Компонент AdminInventory завантажився!");
  const [items, setItems] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await inventoryApi.getInventory();
        console.log("Ось твої квіти з бази:", response.data); 
        setItems(response.data);
      } catch (error) {
        console.error("Помилка завантаження:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>Список квітів (Адмінка)</h3>
      {items.length === 0 ? (
        <p>Завантаження або квітів немає...</p>
      ) : (
        <ul>
          {items.map(flower => (
            <li key={flower.id}>{flower.inventory_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminInventory;