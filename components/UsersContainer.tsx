import React from "react";
import { User } from "../types";
import UserCard from "./UserCard";

interface Props {
  users: User[];
}

const UsersContainer = ({ users }: Props) => {
  //To Do: Display 4 profiles per line for full HD, 5 for QHD and 6 for 4k.

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersContainer;
