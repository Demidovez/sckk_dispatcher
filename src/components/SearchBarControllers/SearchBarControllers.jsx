import { Checkbox, CheckboxGroup, Divider, Loader, SelectPicker } from "rsuite";
import "./styles.scss";
import SearchSettingIcon from "../SearchSettingIcon/SearchSettingIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsActualAction,
  setIsDoneAction,
  setOrderValueAction,
} from "../../actions/creators/searchActionCreators";

function SearchBarControllers() {
  const { orderData, searchData } = useSelector((state) => state.search);
  const { count, isLoading, problems } = useSelector((state) => state.problems);
  const dispatch = useDispatch();

  return (
    <div className="search-bar-controllers-component">
      <div className="controllers-wrapper">
        <SearchSettingIcon />
        <CheckboxGroup inline>
          <Checkbox
            checked={searchData.isActual}
            onChange={(_, isActual) => dispatch(setIsActualAction(isActual))}
          >
            актуальные
          </Checkbox>
          <Checkbox
            checked={searchData.isDone}
            onChange={(_, isActual) => dispatch(setIsDoneAction(isActual))}
          >
            закрытые
          </Checkbox>
        </CheckboxGroup>
        <Divider vertical />
        <SelectPicker
          data={orderData}
          searchable={false}
          placeholder={orderData[0].label}
          cleanable={false}
          className="order-select"
          onChange={(orderValue) => dispatch(setOrderValueAction(orderValue))}
        />
        {isLoading && problems.length > 0 && (
          <div className="loader-wrapper">
            <Loader size="sm" content="Загрузка..." />
          </div>
        )}
      </div>
      {problems.length > 0 && (
        <p className="found-problems-label">Найдено: {count}</p>
      )}
    </div>
  );
}

export default SearchBarControllers;
