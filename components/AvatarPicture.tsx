import React from "react";
import Image from "next/image";
import { User } from "../types";

interface Props {
  username: User["username"];
}

const AvatarPicture = ({ username }: Props) => {
  return (
    <>
      <Image
        src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
        alt={username}
        width={250}
        height={250}
      />
    </>
  );
};

export default AvatarPicture;
