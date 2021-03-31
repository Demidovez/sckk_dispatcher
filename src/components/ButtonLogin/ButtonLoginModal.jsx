import { Button, Input, Icon, Modal, Loader } from "rsuite";
import "./styles.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tryLoginAction } from "../../actions/creators/userActionCreators";

function ButtonLogin() {
  const { isLogined, isTryingLogin, errorMessage } = useSelector(
    (state) => state.user
  );
  const [isShowLoginModal, setIsShowLoginModal] = useState(false);
  const [loginData, setLoginData] = useState({ login: "", password: "" });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isShowLoginModal) {
      setLoginData({ login: "", password: "" });
    }
  }, [isShowLoginModal]);

  useEffect(() => {
    isLogined && setIsShowLoginModal(false);
  }, [isLogined]);

  useEffect(() => {
    errorMessage && setLoginData({ ...loginData, password: "" });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMessage]);

  const submitLoginModal = () => {
    dispatch(tryLoginAction(loginData));
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
          <Modal.Title>
            {errorMessage ? (
              <p className="error-message">{errorMessage}</p>
            ) : (
              "Авторизация"
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Логин:</p>
          <Input
            placeholder="Введите..."
            spellCheck="false"
            autoComplete="on"
            value={loginData.login}
            onChange={(login) => setLoginData({ ...loginData, login })}
          />
          <p>Пароль:</p>
          <Input
            placeholder="8 символов..."
            spellCheck="false"
            type="password"
            autoComplete="on"
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
            <div>
              {isTryingLogin ? <Loader size="xs" /> : <Icon icon="user-o" />}
            </div>
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
