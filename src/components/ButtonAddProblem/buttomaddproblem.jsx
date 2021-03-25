import { Button, Icon } from "rsuite";
import "./styles.scss";

function ButtonAddProblem() {
  return (
    <div className="button-add-problem-component">
      <Button color="blue">
        <Icon icon="plus" />
        Добавить
      </Button>
    </div>
  );
}

export default ButtonAddProblem;
