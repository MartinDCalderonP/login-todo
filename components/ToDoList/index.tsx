import { useEffect, useState } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import AddToDo from "components/AddToDo";
import ToDoListItem from "components/ToDoListItem";
import { ToDoUnorderedList } from "./styles";

export type ToDo = {
  id: number;
  value: string;
};

interface IToDoList {
  addToDo: boolean;
  handleCloseAddToDo: Function;
  handleOpenAddToDo: Function;
  searchValue: string;
}

const ToDoList = ({
  addToDo,
  handleCloseAddToDo,
  handleOpenAddToDo,
  searchValue,
}: IToDoList) => {
  const [toDoList, setToDoList] = useLocalStorage("toDoList", []);
  const [currentToDoList, setCurrentToDoList] = useState([]);
  const [editToDo, setEditToDo] = useState<ToDo>({
    id: 0,
    value: "",
  });

  useEffect(() => {
    if (toDoList.length > 0) {
      const currentToDoList = toDoList?.filter((toDo: ToDo) => {
        return toDo.value.toLowerCase().includes(searchValue.toLowerCase());
      });
      setCurrentToDoList(currentToDoList);
    }
  }, [toDoList, searchValue]);

  const handleEditToDo = (id: number, value: string) => {
    setEditToDo({
      id,
      value,
    });

    handleOpenAddToDo();
    deleteToDo(id);
  };

  const deleteToDo = (id: number) => {
    const newToDoList = toDoList?.filter((toDo: ToDo) => toDo.id !== id);

    setToDoList(newToDoList);
  };

  return (
    <ToDoUnorderedList>
      {addToDo && (
        <AddToDo
          editToDo={editToDo}
          handleCloseAddToDo={handleCloseAddToDo}
          setToDoList={setToDoList}
          toDoList={toDoList}
        />
      )}
      {currentToDoList?.map(({ id, value }) => (
        <ToDoListItem
          key={id}
          deleteToDo={deleteToDo}
          handleEditToDo={handleEditToDo}
          id={id}
          text={value}
        />
      ))}
    </ToDoUnorderedList>
  );
};

export default ToDoList;
