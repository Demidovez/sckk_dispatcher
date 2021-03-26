import { Input, InputGroup, Icon } from "rsuite";
import "./styles.scss";

function SearchBar() {
  return (
    <InputGroup inside className="search-bar-component">
      <InputGroup.Button>
        <Icon icon="search" />
      </InputGroup.Button>
      <Input spellCheck="false" />
      <InputGroup.Button>
        <Icon icon="close" />
      </InputGroup.Button>
    </InputGroup>
  );
}

export default SearchBar;
