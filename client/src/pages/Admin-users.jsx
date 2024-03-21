import { useEffect, useState } from "react";

const URL = "http://localhost:5007/api/admin/users";

import { useAuth } from "../store/auth";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const { authorizationToken } = useAuth();

  const getAllUsers = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`Users data ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(`Error on getting users data ${error}`);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <section className="admin-user-section">
        <div className="container heading">
          <h1>Users Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((usrElm, index) => {
                return (
                  <tr key={index}>
                    <td>{usrElm.username}</td>
                    <td>{usrElm.email}</td>
                    <td>{usrElm.phone}</td>
                    <td>Edit</td>
                    <td>Delete</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
