import Reat, { useState, useEffect } from "react";
import Head from "next/head";
import type { NextPage, GetServerSideProps } from "next";
import axios, { AxiosError } from "axios";
import { User } from "../types";
import UsersContainer from "../components/UsersContainer";
import LoadingIndicator from "../components/LoadingIndicator";

interface Props {
  data: User[];
  error: Error | AxiosError;
}

const Home: NextPage<Props> = ({ data, error }) => {
  const [isLoading, setIsLoading] = useState(true);

  if (error) {
    if (error.message) {
      console.log(error.message);
    } else {
      console.log(error);
    }
  }

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

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
      {isLoading && <LoadingIndicator />}
      {!isLoading && <UsersContainer users={data} />}
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
