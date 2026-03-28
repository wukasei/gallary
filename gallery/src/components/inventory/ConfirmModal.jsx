// src/components/inventory/ConfirmModal.jsx
import '../../App.css';

const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
  if (!isOpen) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{title || "Підтвердження дії"}</h3>
        <p>{message || "Ви впевнені, що хочете це зробити?"}</p>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onCancel}>Скасувати</button>
          <button className="btn-confirm-delete" onClick={onConfirm}>Так, видалити</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;