import { Button, Modal } from "rsuite";
import "./styles.scss";

function ButtonAddProblemModal({ onClose, onSubmit, isShow }) {
  return (
    <Modal
      show={isShow}
      onHide={onClose}
      className="button-add-problem-modal-component"
    >
      <Modal.Header>
        <Modal.Title>Добавить проблему</Modal.Title>
      </Modal.Header>
      <Modal.Body>текст</Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} appearance="subtle">
          Отмена
        </Button>
        <Button onClick={onSubmit} appearance="primary">
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ButtonAddProblemModal;
