import Head from "next/head";
import LoginForm from "components/LoginForm";
import { MainContainer } from "./styles";

const Home = () => {
  return (
    <>
      <Head>
        <title>To Do App with Login</title>
        <meta name="description" content="A simple to do app with a login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <h1>Rapptr Labs</h1>
        <LoginForm />
      </MainContainer>
    </>
  );
};

export default Home;
