// src/components/inventory/InventoryTable.jsx
import { Link } from 'react-router-dom';

const InventoryTable = ({ items, onDelete }) => {
  return (
    <table className="inventory-table">
      <thead>
        <tr>
          <th>Фото</th>
          <th>Назва</th>
          <th>Опис</th>
          <th>Дії</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>
              <img src={item.photo} alt={item.inventory_name} className="preview-img" />
            </td>
            <td><strong>{item.inventory_name}</strong></td>
            <td>{item.description}</td>
            <td className="actions-cell">
            <Link to={`/admin/details/${item.id}`} className="action-icon-btn" title="Переглянути">
              👁️
            </Link>
            <Link to={`/admin/edit/${item.id}`} className="action-icon-btn" title="Редагувати">
              ✏️
            </Link>
            <button 
              onClick={() => onDelete(item.id)} 
              className="btn-delete action-icon-btn" 
              title="Видалити"
            >
              🗑️
            </button>
          </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;