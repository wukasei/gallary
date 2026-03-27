import { useEffect, useState } from 'react';
import { inventoryApi } from './services/inventoryApi';

const AdminInventory = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Запит пішов..."); 
    inventoryApi.getInventory()
      .then(response => {
        console.log("Дані отримано:", response.data);
        setItems(response.data);
      })
      .catch(err => {
        console.error("Помилка API:", err);
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ border: '2px solid pink', padding: '10px' }}>
      <h3>Сторінка Адмінки</h3>
      {error && <p style={{ color: 'red' }}>Помилка: {error}</p>}
      
      {items.length > 0 ? (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <strong>{item.inventory_name}</strong> - {item.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>Квітів поки немає або завантаження...</p>
      )}
    </div>
  );
};

export default AdminInventory;