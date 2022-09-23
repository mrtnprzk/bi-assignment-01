import React from "react";
import { User } from "../types";
import UserCard from "./UserCard";

interface Props {
  users: User[];
}

const UsersContainer = ({ users }: Props) => {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 hd:grid-cols-3 fhd:grid-cols-4 qhd:grid-cols-5 4k:grid-cols-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersContainer;
