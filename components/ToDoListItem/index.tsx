import { MouseEvent } from "react";
import ListItem from "components/ListItem";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { IconsButtonsContainer, IconButton } from "./styles";

interface IToDoListItem {
  deleteToDo: Function;
  handleEditToDo: Function;
  id: number;
  text: string;
}

const ToDoListItem = ({
  deleteToDo,
  handleEditToDo,
  id,
  text,
}: IToDoListItem) => {
  const handleEditButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    handleEditToDo(id, text);
  };

  const handleDeleteButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    deleteToDo(id);
  };

  const icons = [
    {
      icon: <FaPencilAlt size={20} />,
      name: "Edit",
      onClick: handleEditButtonClick,
    },
    {
      icon: <FaTrashAlt size={20} />,
      name: "Delete",
      onClick: handleDeleteButtonClick,
    },
  ];

  return (
    <ListItem>
      {text}
      <IconsButtonsContainer>
        {icons?.map(({ icon, name, onClick }) => (
          <IconButton key={id + name} onClick={onClick}>
            {icon}
          </IconButton>
        ))}
      </IconsButtonsContainer>
    </ListItem>
  );
};

export default ToDoListItem;
