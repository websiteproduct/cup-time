import Modal from "react-modal";
import { API_URL } from "../const";
import { useState } from "react";
import { useCart } from "../context/CartContext";

Modal.setAppElement("#root");

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!data) {
    return null;
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(data, quantity);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Modal"
      overlayClassName="modal__overlay"
      className="modal modal-product"
    >
      <img
        src={`${API_URL}${data.img}`}
        className="modal__image"
        alt={data.title}
      />
      <div className="modal__details">
        <h2 className="modal__title">{data.title}</h2>
        <p className="modal__price">{data.price}&nbsp;₽</p>
        <ul className="modal__list">
          {Object.entries(data.additional).map(([key, value]) => (
            <li key={key} className="modal__list-item">
              <span className="modal__key">{key}:</span> {value}
            </li>
          ))}
        </ul>
        <div className="modal__cart">
          <div className="modal__quantity">
            <button
              className="modal-item__quantity-button modal-item__quantity-button_minus"
              onClick={handleDecrease}
            ></button>
            <input
              type="number"
              className="modal-item__quantity-input"
              value={quantity}
              readOnly
            />
            <button
              className="modal-item__quantity-button modal-item__quantity-button_plus"
              onClick={handleIncrease}
            ></button>
          </div>
          <button className="modal__cart-btn" onClick={handleAddToCart}>
            Добавить
          </button>
        </div>
      </div>

      <button onClick={onRequestClose} className="modal__close">
        Закрыть
      </button>
    </Modal>
  );
};
