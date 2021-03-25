import { useState } from "react";
import { Checkbox, CheckboxGroup, SelectPicker, Modal, Button } from "rsuite";
import "./styles.scss";

function SearchBarControllers() {
  const countProblems = 245;
  // const areaList = [
  //   { label: "1ABCDEH", value: "1ABCDEH" },
  //   { label: "2ABCDE", value: "2ABCDE" },
  //   { label: "5ABC", value: "5ABC" },
  //   { label: "6ABCDEF", value: "6ABCDEF" },
  // ];
  // const codeProblemList = [
  //   { label: "T345", value: "T345" },
  //   { label: "A14", value: "A14" },
  //   { label: "X90", value: "X90" },
  //   { label: "K89", value: "K89" },
  // ];
  const orderList = [
    { label: "Новые", value: "new" },
    { label: "Старые", value: "old" },
    { label: "По цехам", value: "area" },
  ];

  const [showFilterModal, setShowFilterModal] = useState(false);

  const submitFilterModal = () => {};

  return (
    <div className="search-bar-controllers-component">
      <p className="found-problems-label">Найдено: {countProblems}</p>
      <div className="controllers-wrapper">
        <CheckboxGroup inline name="checkboxList">
          <Checkbox defaultChecked>актуальные</Checkbox>
          <Checkbox defaultChecked>закрытые</Checkbox>
        </CheckboxGroup>
        <SelectPicker
          data={orderList}
          searchable={false}
          placeholder={orderList[0].label}
          cleanable={false}
          className="order-select"
        />
        <div
          className="icon-controller"
          onClick={() => setShowFilterModal(true)}
        >
          <img src="/settings.svg" alt="Настройка сортировки" />
        </div>
      </div>

      <Modal
        show={showFilterModal}
        onHide={() => setShowFilterModal(false)}
        className="search-bar-controllers-modal"
      >
        <Modal.Header>
          <Modal.Title>Выберить параметры отображения</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>bla-bla-bla</div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={submitFilterModal} appearance="primary">
            Применить
          </Button>
          <Button onClick={() => setShowFilterModal(false)} appearance="subtle">
            Отмена
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SearchBarControllers;
