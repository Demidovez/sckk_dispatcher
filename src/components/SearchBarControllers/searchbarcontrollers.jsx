import { Checkbox, CheckboxGroup, SelectPicker } from "rsuite";
import "./styles.scss";
import SearchSettingIcon from "../SearchSettingIcon/searchsettingicon";
import { useSelector } from "react-redux";

function SearchBarControllers() {
  const countProblems = 245;

  const { orderData } = useSelector((state) => state.search);

  return (
    <div className="search-bar-controllers-component">
      <p className="found-problems-label">Найдено: {countProblems}</p>
      <div className="controllers-wrapper">
        <CheckboxGroup inline name="checkboxList">
          <Checkbox defaultChecked>актуальные</Checkbox>
          <Checkbox defaultChecked>закрытые</Checkbox>
        </CheckboxGroup>
        <SelectPicker
          data={orderData}
          searchable={false}
          placeholder={orderData[0].label}
          cleanable={false}
          className="order-select"
        />
        <SearchSettingIcon className="icon-controller" />
      </div>
    </div>
  );
}

export default SearchBarControllers;
