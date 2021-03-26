import { useState } from "react";
import { Modal, CheckPicker, DatePicker, Button } from "rsuite";
import "./styles.scss";
import { useSelector } from "react-redux";

function SearchSettingIcon({ className }) {
  const { areaList, codeProblemList, locale } = useSelector(
    (state) => state.problems
  );

  const [showFilterModal, setShowFilterModal] = useState(false);

  const submitFilterModal = () => {
    console.log(1);
    setShowFilterModal(false);
  };

  return (
    <div>
      <div
        className={`${className} search-setting-icon-component`}
        onClick={() => setShowFilterModal(true)}
      >
        <img src="/settings.svg" alt="Настройка сортировки" />
      </div>
      <Modal
        show={showFilterModal}
        onHide={() => setShowFilterModal(false)}
        className="search-setting-icon-modal"
        size="xs"
      >
        <Modal.Header>
          <Modal.Title>Выберить параметры отображения</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Цех:</p>
          <CheckPicker data={areaList} searchable={false} placeholder="Все" />
          <p>Код проблемы:</p>
          <CheckPicker
            data={codeProblemList}
            searchable={false}
            placeholder="Все"
          />
          <p>За период:</p>
          <div className="date-wrapper">
            <DatePicker
              oneTap
              block
              placeholder="Выберите начало"
              ranges={[]}
              locale={locale}
              isoWeek
            />
            <DatePicker
              oneTap
              block
              placeholder="Выберите конец"
              ranges={[]}
              locale={locale}
              isoWeek
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowFilterModal(false)} appearance="subtle">
            Отмена
          </Button>
          <Button onClick={submitFilterModal} appearance="primary">
            Применить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SearchSettingIcon;
