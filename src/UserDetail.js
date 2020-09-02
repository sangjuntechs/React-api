import React from "react";
import { useAsync } from "react-async";
import axios from "axios";

//axios로 api받아오고 백틱을 사용해 id에 따른 url 요청 비동기처리
async function getUser({ id }) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

//비구조 할당으로 id props로 받아옴. 
function UserDetail({ id }) {
    /* useAsync(react-async)활용 비구조할당으로 받아오고
    비동기함수는 getUser watch는 deps와 같은역할이므로
    id값이 변할 때 마다 리렌더링 */
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
