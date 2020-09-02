import React from "react";
import { useAsync } from "react-async";
import axios from "axios";

async function getUser({ id }) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

function UserDetail({ id }) {
  const { data: user, error, isLoading } = useAsync({
    promiseFn: getUser,
    id,
    watch: id,
  });

  if (isLoading) return <div>Loading..</div>;
  if (error) return <div>Catch Error!</div>;
  if (!user) return null;
  
  return (
  <div>
      <h1>{user.name} detail view</h1>
      <h3>{user.name}({user.username})</h3>
      <h3>company: {user.company.name}</h3>
      <p>e-mail: {user.email}</p>
      <p>phoneNumber: {user.phone}</p>
      
  </div>
  );
}

export default UserDetail;
