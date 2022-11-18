import Head from "next/head";
import LogoutButton from "components/LogoutButton";
import ToDoListCard from "components/ToDoListCard";
import { MainContainer } from "./styles";

const ToDoListPage = () => {
  return (
    <>
      <Head>
        <title>To Do List</title>
      </Head>

      <MainContainer>
        <LogoutButton />

        <h1>My To-Do List</h1>

        <ToDoListCard />
      </MainContainer>
    </>
  );
};

export default ToDoListPage;
