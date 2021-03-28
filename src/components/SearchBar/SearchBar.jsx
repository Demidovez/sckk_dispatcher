import { Input, InputGroup, Icon } from "rsuite";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSearchStrAction } from "../../actions/creators/searchActionCreators";

function SearchBar() {
  const { searchStr } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  return (
    <InputGroup inside className="search-bar-component">
      <InputGroup.Button>
        <Icon icon="search" />
      </InputGroup.Button>
      <Input
        spellCheck="false"
        value={searchStr}
        onChange={(value) => dispatch(setSearchStrAction(value))}
      />
      <InputGroup.Button>
        <Icon icon="close" />
      </InputGroup.Button>
    </InputGroup>
  );
}

export default SearchBar;
