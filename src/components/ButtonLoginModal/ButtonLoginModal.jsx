import { Button, Modal } from "rsuite";
import "./styles.scss";

function ButtonLoginModal({ onClose, onSubmit, isShow }) {
  return (
    <Modal
      show={isShow}
      onHide={onClose}
      className="button-login-modal-component"
    >
      <Modal.Header>
        <Modal.Title>Авторизация</Modal.Title>
      </Modal.Header>
      <Modal.Body>текст</Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} appearance="subtle">
          Отмена
        </Button>
        <Button onClick={onSubmit} appearance="primary">
          Войти
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ButtonLoginModal;
