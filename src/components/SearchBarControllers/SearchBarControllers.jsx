import { Checkbox, CheckboxGroup, Divider, SelectPicker } from "rsuite";
import "./styles.scss";
import SearchSettingIcon from "../SearchSettingIcon/SearchSettingIcon";
import { useSelector } from "react-redux";

function SearchBarControllers() {
  const countProblems = 245;

  const { orderData } = useSelector((state) => state.search);

  return (
    <div className="search-bar-controllers-component">
      <div className="controllers-wrapper">
        <SearchSettingIcon className="icon-controller" />
        <CheckboxGroup inline name="checkboxList">
          <Checkbox defaultChecked>актуальные</Checkbox>
          <Checkbox defaultChecked>закрытые</Checkbox>
        </CheckboxGroup>
        <Divider vertical />
        <SelectPicker
          data={orderData}
          searchable={false}
          placeholder={orderData[0].label}
          cleanable={false}
          className="order-select"
        />
      </div>
      <p className="found-problems-label">Найдено: {countProblems}</p>
    </div>
  );
}

export default SearchBarControllers;
