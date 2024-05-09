import { useEffect,useState } from "react";
import {useAuth} from "../store/auth";

const URL = "http://localhost:5007/api/admin/contacts";

export const AdminContacts = () => {
  const [contact, setContact] = useState([]);

  const { authorizationToken } = useAuth();

  const getAllContacts = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setContact(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllContacts();
  }, []);
  return (
    <>
      <section className="admin-user-section">
        <div className="container heading">
          <h1>Contacts Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr className="tr_c">
                <th>Username</th>
                <th>Email</th>
                <th>Message</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {contact.map((elem, ind) => {
                return (
                  <tr className="tr_c">
                    <td>{elem.username}</td>
                    <td>jhon@gmail.com</td>
                    <td>About Blogs</td>
                    <td>
                      <button className="btn">Delete</button>
                    </td>
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
