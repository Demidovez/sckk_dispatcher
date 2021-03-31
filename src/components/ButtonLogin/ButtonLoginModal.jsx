import { Button, Input, Icon, Modal } from "rsuite";
import "./styles.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { tryLoginAction } from "../../actions/creators/userActionCreators";

function ButtonLogin() {
  const [isShowLoginModal, setIsShowLoginModal] = useState(false);
  const [loginData, setLoginData] = useState({ login: "", password: "" });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isShowLoginModal) {
      setLoginData({ login: "", password: "" });
    }
  }, [isShowLoginModal]);

  const submitLoginModal = () => {
    dispatch(tryLoginAction(loginData));
    setIsShowLoginModal(false);
  };

  return (
    <div>
      <div className="button-login-component">
        <Button color="blue" onClick={() => setIsShowLoginModal(true)}>
          <Icon icon="user-o" />
          Войти
        </Button>
      </div>

      <Modal
        show={isShowLoginModal}
        onHide={() => setIsShowLoginModal(false)}
        size="xs"
        className="button-login-modal"
      >
        <Modal.Header>
          <Modal.Title>Авторизация</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Логин:</p>
          <Input
            placeholder="Введите..."
            spellCheck="false"
            value={loginData.login}
            onChange={(login) => setLoginData({ ...loginData, login })}
          />
          <p>Пароль:</p>
          <Input
            placeholder="8 символов..."
            spellCheck="false"
            value={loginData.password}
            onChange={(password) => setLoginData({ ...loginData, password })}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={submitLoginModal}
            appearance="primary"
            disabled={!(loginData.login && loginData.password)}
          >
            Войти
          </Button>
          <Button
            onClick={() => setIsShowLoginModal(false)}
            appearance="subtle"
          >
            Отмена
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ButtonLogin;
