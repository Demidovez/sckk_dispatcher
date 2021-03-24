import { Input, InputGroup, Icon } from "rsuite";
import "./styles.scss";

function SearchBar() {
  return (
    <InputGroup inside className="search-bar-component">
      <InputGroup.Button>
        <Icon icon="search" />
      </InputGroup.Button>
      <Input />
    </InputGroup>
  );
}

export default SearchBar;
