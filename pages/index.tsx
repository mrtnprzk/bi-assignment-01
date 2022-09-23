import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BOHEMIA INTERACTIVE</title>
        <meta
          name="description"
          content="Created by mrtnprzk for BOHEMIA INTERACTIVE"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Home;
