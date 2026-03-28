// src/components/inventory/InventoryDetails.jsx
import '../../App.css';

const InventoryDetails = ({ item }) => {
  if (!item) return <p>Дані відсутні</p>;

  return (
    <div className="details-card">
      <div className="details-image-wrapper">
        <img src={item.photo} alt={item.inventory_name} className="details-full-img" />
      </div>
      <div className="details-info">
        <h1>{item.inventory_name}</h1>
        <p className="details-description">
          <strong>Опис:</strong> {item.description || "Опис відсутній"}
        </p>
        <div className="details-meta">
          <span>ID товару: #{item.id}</span>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;