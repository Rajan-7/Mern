import { NavLink, Outlet } from "react-router-dom";
import { LiaUser } from "react-icons/lia";
import { BiMessage } from "react-icons/bi";
import { FaCode,FaHome } from "react-icons/fa";

export const AdminLayout = () => {
  return (
    <>
      <header className="admin">
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users"><LiaUser/>users</NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts"><BiMessage/>contacts</NavLink>
              </li>
              <li>
                <NavLink to="/service"><FaCode/>service</NavLink>
              </li>
              <li>
                <NavLink to="/"><FaHome/>home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
