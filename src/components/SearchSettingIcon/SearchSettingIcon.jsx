import { useEffect, useState } from "react";
import { Modal, CheckPicker, DatePicker, Button, Badge } from "rsuite";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setAdditionalSearchData,
  setResetAdditionalSearchData,
} from "../../actions/creators/searchActionCreators";
import settingsIcon from "../../assets/settings.svg";

const initialSearchData = {
  areas: [],
  problemCodes: [],
  fromDate: null,
  toDate: null,
};

function SearchSettingIcon() {
  const { areaList, codeProblemList, locale } = useSelector(
    (state) => state.problems
  );
  const { areas, problemCodes, fromDate, toDate } = useSelector(
    (state) => state.search.searchData
  );
  const dispatch = useDispatch();

  const [showFilterModal, setShowFilterModal] = useState(false);
  const [searchData, setSearchData] = useState({
    areas,
    problemCodes,
    fromDate,
    toDate,
  });
  const [isSearchDataEdited, setIsSearchDataEdited] = useState(false);

  useEffect(() => {
    setIsSearchDataEdited(
      JSON.stringify(initialSearchData) !== JSON.stringify(searchData)
    );
  }, [searchData]);

  const submitFilterModal = () => {
    setShowFilterModal(false);
    dispatch(setAdditionalSearchData(searchData));
  };

  const resetSearchData = () => {
    setShowFilterModal(false);
    dispatch(setResetAdditionalSearchData());
    setTimeout(() => setSearchData(initialSearchData), 500);
  };

  const onCancelSetSearchData = () => {
    setShowFilterModal(false);
    setTimeout(
      () => setSearchData({ areas, problemCodes, fromDate, toDate }),
      500
    );
  };

  return (
    <div>
      <div
        className="search-setting-icon-component"
        onClick={() => setShowFilterModal(true)}
      >
        <Badge className={`${isSearchDataEdited ? "show" : ""}`}>
          <img src={settingsIcon} alt="Настройка сортировки" />
        </Badge>
      </div>
      <Modal
        show={showFilterModal}
        onHide={onCancelSetSearchData}
        className="search-setting-icon-modal"
        size="xs"
      >
        <Modal.Header>
          <Modal.Title>Выберить параметры отображения</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Цех:</p>
          <CheckPicker
            data={areaList}
            searchable={false}
            placeholder="Все"
            value={searchData.areas}
            onChange={(areas) => setSearchData({ ...searchData, areas })}
          />
          <p>Код проблемы:</p>
          <CheckPicker
            data={codeProblemList}
            searchable={false}
            placeholder="Все"
            value={searchData.problemCodes}
            onChange={(problemCodes) =>
              setSearchData({ ...searchData, problemCodes })
            }
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
              value={searchData.fromDate}
              onChange={(fromDate) =>
                setSearchData({
                  ...searchData,
                  fromDate,
                })
              }
            />
            <DatePicker
              oneTap
              block
              placeholder="Выберите конец"
              ranges={[]}
              locale={locale}
              isoWeek
              value={searchData.toDate}
              onChange={(toDate) =>
                setSearchData({
                  ...searchData,
                  toDate,
                })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={submitFilterModal}
            appearance="primary"
            // disabled={!isSearchDataEdited}
          >
            Применить
          </Button>
          <Button onClick={onCancelSetSearchData} appearance="subtle">
            Отмена
          </Button>
          {isSearchDataEdited && (
            <Button
              onClick={resetSearchData}
              color="red"
              appearance="link"
              className="btn-reset"
            >
              Очистить
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SearchSettingIcon;
