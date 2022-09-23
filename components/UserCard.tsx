import React from "react";
import { User } from "../types";
import AvatarPicture from "./AvatarPicture";

interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => {
  const { id, name, email, phone, address, website, company, username } = user;
  //To DO: Each user's profile contains an avatar picture, name, email, phone, address, website and company name.

  return (
    <div>
      <AvatarPicture username={username} />
    </div>
  );
};

export default UserCard;
