import React, { useState } from "react";
import axios from "axios";
import { useAsync } from "react-async";
import UserDetail from "./UserDetail";

async function getUser() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

function ClickUser() {
  const [userId, setUserId] = useState(null);
  const { data: users, error, isLoading, reload } = useAsync({
    promiseFn: getUser,
  });

  if (isLoading) return <div>Loading..</div>;
  if (error) return <div>Error Catch!</div>;
  if (!users) return <button onClick={reload}>Reload</button>;

  return (
    <>
      <ul>
        <h1>react-async detail User</h1>
        {users.map((user) => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      {userId && <UserDetail id={userId} />}
    </>
  );
}

export default ClickUser;
