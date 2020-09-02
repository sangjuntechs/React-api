import React, { useState, useEffect, } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setUsers(null);
        setError(null);
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/"
        );
        setUsers(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <div>Loading..</div>;
  if (error) return <div>Error catch</div>;
  if (!users) return null;
  return (
    <>
    <h1>fetch Users</h1>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <h4>{user.username}({user.name})</h4>
          e-mail: {user.email}
        </li>
      ))}
    </ul>
    </>
  );
}

export default Users;
