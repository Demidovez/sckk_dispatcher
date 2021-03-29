import { useState } from "react";
import { Button, Icon } from "rsuite";
import DrawerAddProblem from "../DrawerAddProblem/DrawerAddProblem";
import "./styles.scss";

function ButtonAddProblem() {
  const [isShowAddProblemDrawer, setIsShowAddProblemDrawer] = useState(false);

  return (
    <div>
      <div className="button-add-problem-component">
        <Button color="blue" onClick={() => setIsShowAddProblemDrawer(true)}>
          <Icon icon="plus" />
          Добавить
        </Button>
      </div>

      <DrawerAddProblem
        onClose={() => setIsShowAddProblemDrawer(false)}
        isShow={isShowAddProblemDrawer}
      />
    </div>
  );
}

export default ButtonAddProblem;
