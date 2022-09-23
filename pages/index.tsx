import Head from "next/head";
import type { NextPage, GetServerSideProps } from "next";
import axios, { AxiosError } from "axios";
import { User } from "../types";

interface Props {
  data: User[];
  error: Error | AxiosError;
}

const Home: NextPage<Props> = ({ data, error }) => {
  if (error) {
    if (error.message) {
      console.log(error.message);
    } else {
      console.log(error);
    }
  }
  console.log(data);
  return (
    <>
      <Head>
        <title>BOHEMIA INTERACTIVE</title>
        <meta
          name="description"
          content="Created by mrtnprzk for BOHEMIA INTERACTIVE"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return {
      props: {
        data: response.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error,
      },
    };
  }
};

export default Home;
