import { ChangeEvent, useState } from "react";
import Button from "components/Button";
import ListItem from "components/ListItem";
import { Input } from "./styles";
import { ToDo } from "../ToDoList";

interface IAddToDo {
  editToDo: ToDo;
  handleCloseAddToDo: Function;
  setToDoList: Function;
  toDoList: string[];
}
const AddToDo = ({
  editToDo,
  handleCloseAddToDo,
  setToDoList,
  toDoList,
}: IAddToDo) => {
  const newToDo = {
    id: toDoList.length + 1,
    value: "",
  };

  const [currentToDo, setCurrentToDo] = useState<ToDo>(
    editToDo.id ? editToDo : newToDo
  );

  const handleSaveButtonClick = () => {
    setToDoList([...toDoList, currentToDo]);

    setCurrentToDo(newToDo);

    handleCloseAddToDo();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const minValueLength = 1;
    const maxValueLength = 25;

    if (value.length >= minValueLength && value.length <= maxValueLength) {
      setCurrentToDo({
        id: toDoList.length + 1,
        value,
      });
    }
  };

  return (
    <ListItem>
      <Input
        onChange={handleInputChange}
        type="text"
        value={currentToDo.value}
      />
      <div>
        <Button onClick={handleSaveButtonClick} variant="black">
          Save
        </Button>
      </div>
    </ListItem>
  );
};

export default AddToDo;
