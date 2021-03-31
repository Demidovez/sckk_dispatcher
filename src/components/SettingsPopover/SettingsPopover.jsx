import { Button, Icon, Modal } from "rsuite";
import "./styles.scss";
import { useState } from "react";
import { tryLogoutAction } from "../../actions/creators/userActionCreators";
import { useDispatch } from "react-redux";

function SettingsPopover() {
  const dispatch = useDispatch();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const onLogout = () => {
    dispatch(tryLogoutAction());
    setShowLogoutModal(false);
  };

  return (
    <div className="settings-popover-component">
      <Button appearance="link" onClick={() => setShowLogoutModal(true)}>
        Выйти
      </Button>

      <Modal
        show={showLogoutModal}
        onHide={() => setShowLogoutModal(false)}
        size="xs"
        className="settings-popover-modal"
      >
        <Modal.Body>
          <Icon icon="remind" />
          Вы уверены, что хотите выйти?
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onLogout} appearance="primary">
            Да
          </Button>
          <Button onClick={() => setShowLogoutModal(false)} appearance="subtle">
            Нет
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SettingsPopover;
