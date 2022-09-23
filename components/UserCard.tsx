import React from "react";
import { User } from "../types";
import AvatarPicture from "./AvatarPicture";

interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => {
  const { name, email, phone, address, website, company, username } = user;

  return (
    <div className="flex items-start rounded border p-5 m-3 shadow-xl bg-slate-100 space-x-5">
      <AvatarPicture username={username} />
      <div className="text-gray-500">
        <p className="border-b-2">
          <span className="font-bold text-gray-800">Full Name:</span> {name}
        </p>
        <p>
          <span className="font-bold text-gray-800">Street:</span>{" "}
          {address.street}
        </p>
        <p>
          <span className="font-bold text-gray-800">Zipcode:</span>{" "}
          {address.zipcode}
        </p>
        <p className="border-b-2">
          <span className="font-bold text-gray-800">City:</span> {address.city}
        </p>
        <p>
          <span className="font-bold text-gray-800">Email:</span> {email}
        </p>
        <p>
          <span className="font-bold text-gray-800">Phone:</span> {phone}
        </p>
        <p className="border-b-2">
          <span className="font-bold text-gray-800">Website:</span> {website}
        </p>
        <p>
          <span className="font-bold text-gray-800">Company:</span>{" "}
          {company.name}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
