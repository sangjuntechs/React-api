import React, { useState, useEffect, useLayoutEffect } from "react";
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

  if (loading) return <div>Loading..</div>
  if (error) return <div>Error catch</div>
  if (!users) return null;
  return <ul>
      {users.map(user => <li key={user.id}>
          {user.username}({user.name})
      </li>)}
  </ul>
}

export default Users;
