import { useState } from "react";
import { Button, Icon } from "rsuite";
import DrawerAddProblem from "../DrawerAddProblem/DrawerAddProblem";
import "./styles.scss";
import ButtonLoginModal from "../ButtonLoginModal/ButtonLoginModal";

function ButtonAddProblem() {
  const [isShowAddProblemModal, setIsShowAddProblemModal] = useState(false);
  const [isShowLoginModal, setIsShowLoginModal] = useState(false);

  const submitLoginModal = () => {
    setIsShowLoginModal(false);
  };

  const isLogined = true;

  return (
    <div>
      <div className="button-add-problem-component">
        {isLogined && (
          <Button color="blue" onClick={() => setIsShowAddProblemModal(true)}>
            <Icon icon="plus" />
            Добавить
          </Button>
        )}
        {!isLogined && (
          <Button color="blue" onClick={() => setIsShowLoginModal(true)}>
            <Icon icon="user-o" />
            Войти
          </Button>
        )}
      </div>

      <DrawerAddProblem
        onClose={() => setIsShowAddProblemModal(false)}
        isShow={isShowAddProblemModal}
      />
      <ButtonLoginModal
        onClose={() => setIsShowLoginModal(false)}
        onSubmit={submitLoginModal}
        isShow={isShowLoginModal}
      />
    </div>
  );
}

export default ButtonAddProblem;
