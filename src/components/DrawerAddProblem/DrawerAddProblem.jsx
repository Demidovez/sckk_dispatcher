import { useSelector } from "react-redux";
import {
  Button,
  Drawer,
  Input,
  DatePicker,
  SelectPicker,
  RadioGroup,
  Radio,
} from "rsuite";
import "./styles.scss";

function DrawerAddProblem({ onClose, onSubmit, isShow }) {
  const { areaList, codeProblemList, locale } = useSelector(
    (state) => state.problems
  );

  return (
    <Drawer
      show={isShow}
      onHide={onClose}
      className="drawer-add-problem-component"
    >
      <Drawer.Header>
        <Drawer.Title>Добавить проблему</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <p>Название:</p>
        <Input spellCheck="false" placeholder="Кратко суть проблемы..." />
        <p>Текст:</p>
        <Input
          spellCheck="false"
          placeholder="Подробно о проблеме..."
          componentClass="textarea"
          rows={4}
        />
        <p>Причина:</p>
        <Input spellCheck="false" placeholder="Из-за чего..." />
        <p>Комментарий:</p>
        <Input
          spellCheck="false"
          placeholder="Дополнительная информация..."
          componentClass="textarea"
          rows={2}
        />
        <p>Ответственный:</p>
        <Input spellCheck="false" placeholder="Кто занимается проблемой..." />
        <p>Цех:</p>
        <SelectPicker
          data={areaList}
          searchable={false}
          placeholder="Выберите"
        />
        <div className="code-and-date-wrapper">
          <div>
            <p>Код проблемы:</p>
            <SelectPicker
              data={codeProblemList}
              searchable={false}
              placeholder="Выберите"
            />
          </div>
          <div>
            <p>Дата:</p>
            <DatePicker
              oneTap
              block
              placeholder="Дата проблемы"
              ranges={[]}
              locale={locale}
              isoWeek
            />
          </div>
        </div>
        <RadioGroup name="radioList" inline>
          <Radio value="isActual" checked>
            актуально
          </Radio>
          <Radio value="isDone">закрыто</Radio>
        </RadioGroup>
      </Drawer.Body>
      <Drawer.Footer>
        <Button onClick={onSubmit} appearance="primary">
          Добавить
        </Button>
        <Button onClick={onClose} appearance="subtle">
          Отмена
        </Button>
      </Drawer.Footer>
    </Drawer>
  );
}

export default DrawerAddProblem;
