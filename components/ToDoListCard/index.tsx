import { useState } from "react";
import SearchInput from "components/SearchInput";
import Button from "components/Button";
import ToDoList from "components/ToDoList";
import { Card, Header } from "./styles";

const ToDoListCard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [addToDo, setAddToDo] = useState(false);

  const handleOpenAddToDo = () => {
    setAddToDo(true);
  };

  const handleCloseAddToDo = () => {
    setAddToDo(false);
  };

  return (
    <Card>
      <Header>
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div>
          <Button onClick={handleOpenAddToDo}>New</Button>
        </div>
      </Header>

      <ToDoList
        addToDo={addToDo}
        handleCloseAddToDo={handleCloseAddToDo}
        handleOpenAddToDo={handleOpenAddToDo}
        searchValue={searchValue}
      />
    </Card>
  );
};

export default ToDoListCard;
