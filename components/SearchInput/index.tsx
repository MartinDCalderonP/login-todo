import { ChangeEvent } from "react";
import { BiSearch } from "react-icons/bi";
import { SearchInputWrapper, Input } from "./styles";

interface ISearchInput {
  searchValue: string;
  setSearchValue: Function;
}

const SearchInput = ({ searchValue, setSearchValue }: ISearchInput) => {
  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearchValue(value);
  };

  return (
    <SearchInputWrapper>
      <BiSearch />
      <Input
        onChange={handleSearchInputChange}
        placeholder="search"
        type="text"
        value={searchValue}
      />
    </SearchInputWrapper>
  );
};

export default SearchInput;
