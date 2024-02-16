// import React from "react";
// import "../CSS/other.css";
// import { Link } from "react-router-dom";
// import { adminPanel } from "../../assets/DataJs/functions";
// import card from "../../assets/DataJs/cards";

// const AdminUsers = () => {
//   return (
//     <div className="admin-panel">
//       <div className="admin-sidebar">
//         <h2>Admin Panel</h2>
//         <ul>
//           <li>
//             <Link
//               to="/AdminstratorPanelControll/DashboardHomePage"
//               className="admin-link"
//             >
//               Dashboard
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/AdminstratorPanelControll/DashboardUsers"
//               className="admin-active"
//             >
//               Users
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/AdminstratorPanelControll/DashboardGames"
//               className="admin-link"
//             >
//               Games
//             </Link>
//           </li>
//           <li>
//             <Link to="/" className="admin-link">
//               Logout
//             </Link>
//           </li>
//         </ul>
//       </div>

//       <div className="admin-content">
//         <h1 className="admin-users-heading">Users Management</h1>
//         <table className="admin-users-table">
//           <thead>
//             <tr>
//               <th className="admin-users-id">ID</th>
//               <th className="admin-users-name">Name</th>
//               <th className="admin-users-email">Email</th>
//               <th className="admin-users-actions">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="admin-users-id">1</td>
//               <td className="admin-users-name">John Doe</td>
//               <td className="admin-users-email">john@example.com</td>
//               <td className="admin-games-table-action">
//                 <button className="admin-games-action">Edit</button>
//                 <button onClick={adminPanel} className="admin-games-delete">
//                   Delete
//                 </button>
//               </td>
//             </tr>
//             <tr>
//               <td className="admin-users-id">2</td>
//               <td className="admin-users-name">Jane Smith</td>
//               <td className="admin-users-email">jane@example.com</td>
//               <td className="admin-games-table-action">
//                 <button className="admin-games-action">Edit</button>
//                 <button onClick={adminPanel} className="admin-games-delete">
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminUsers;

import React from "react";
import "../CSS/other.css";
import { Link } from "react-router-dom";
import { adminPanel } from "../../assets/DataJs/functions";
import users from "../../assets/DataJs/users";

const AdminUsers = () => {
  return (
    <div className="admin-panel">
      <div className="admin-sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>
            <Link
              to="/AdminstratorPanelControll/DashboardHomePage"
              className="admin-link"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/AdminstratorPanelControll/DashboardUsers"
              className="admin-active"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/AdminstratorPanelControll/DashboardGames"
              className="admin-link"
            >
              Games
            </Link>
          </li>
          <li>
            <Link to="/" className="admin-link">
              Logout
            </Link>
          </li>
        </ul>
      </div>

      <div className="admin-content">
        <h1 className="admin-users-heading">Users Management</h1>
        <div className="admin-users-container">
          {users.map((user, index) => (
            <div key={index} className="admin-users-items">
              <div className="admin-users-item-div">
                <div className="admin-users-id admin-users-item">
                  ID: {user.id}
                </div>
                <div className="admin-users-name admin-users-item">
                  Full name: {user.fullName}
                </div>
                <div className="admin-users-age admin-users-item">
                  Age: {user.age}
                </div>
                <div className="admin-users-nickname admin-users-item">
                  Nickname: {user.nickname}
                </div>
                <div className="admin-users-email admin-users-item">
                  Email: {user.email}
                </div>
                <div className="admin-users-country admin-users-item">
                  Country: {user.country}
                </div>
                <div className="admin-users-lang admin-users-item">
                  Languages: {user.userLanguages}
                </div>
                <div className="admin-users-contacts admin-users-item">
                  Contacts: {user.steam}, {user.discord}
                </div>

                <div className="admin-users-actions">
                  <button className="admin-games-action">Edit</button>
                  <button onClick={adminPanel} className="admin-games-delete">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
