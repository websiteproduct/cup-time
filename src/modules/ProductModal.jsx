import Modal from "react-modal";
import { API_URL } from "../const";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
  if (!data) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Product Modal"
      overlayClassName="modal__overlay"
      className="modal"
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
            <button className="modal-item__quantity-button modal-item__quantity-button_minus"></button>
            <input
              type="number"
              className="modal-item__quantity-input"
              value={1}
            />
            <button className="modal-item__quantity-button modal-item__quantity-button_plus"></button>
          </div>
          <button className="modal__cart-btn">Добавить</button>
        </div>
      </div>

      <button onClick={onRequestClose} className="modal__close">
        Закрыть
      </button>
    </Modal>
  );
};
