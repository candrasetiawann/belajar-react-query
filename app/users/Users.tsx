import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../store";

type User = {
  id: number;
  name: string;
};

const Users = () => {
  const userQuery = useQuery<User[]>(["users"], getUsers);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Users</h1>
      {userQuery?.data?.map((user: User) => (
        <p className="text-gray-400" key={user.id}>
          {user.name}
        </p>
      ))}
    </div>
  );
};

export default Users;
