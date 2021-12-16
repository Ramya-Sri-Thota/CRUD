import React, { useEffect, useState } from "react";
import axios from "axios";

// const Api = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const userData = async () => {
//       let res = await axios("https://jsonplaceholder.typicode.com/users");
//       console.log(res.data);
//       setUsers(res.data);
//     };
//     userData();
//   }, []);
//   return (
//     <div>
//       {users.map((user) => (
//         <div key={user.id}>
//           <h2>{user.username}</h2>
//           <h2>{user.email}</h2>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Api;

export const GetUser = () => {
  const [users, setUsers] = useState([]);

  axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    console.log(response.data);
    setUsers(response.data);
  });

  return (
    <div>
      {users &&
        users.map((val) => {
          return <h1>{val.name}</h1>;
        })}
    </div>
  );
};
