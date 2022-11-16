import Head from "next/head";
import Login from "components/Login";

const Home = () => {
  return (
    <>
      <Head>
        <title>To Do App with Login</title>
        <meta name="description" content="A simple to do app with a login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Login />
      </main>
    </>
  );
};

export default Home;
