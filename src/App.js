//import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Acountant System</h1>
      <header className="App-header"></header>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import Ledger from "./components/ledger";
// import Reports from "./components/Reports";
// import Settings from "./components/Settings";

// const App = () => {
//   const [activeTab, setActiveTab] = useState("dashboard");

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <Router>
//       <div className="app-container">
//         <nav className="navbar">
//           <ul className="nav-menu">
//             <li
//               className={`nav-item ${
//                 activeTab === "dashboard" ? "active" : ""
//               }`}
//             >
//               <Link
//                 to="/dashboard"
//                 onClick={() => handleTabChange("dashboard")}
//               >
//                 Dashboard
//               </Link>
//             </li>
//             <li
//               className={`nav-item ${activeTab === "ledger" ? "active" : ""}`}
//             >
//               <Link to="/ledger" onClick={() => handleTabChange("ledger")}>
//                 Ledger
//               </Link>
//             </li>
//             <li
//               className={`nav-item ${activeTab === "reports" ? "active" : ""}`}
//             >
//               <Link to="/reports" onClick={() => handleTabChange("reports")}>
//                 Reports
//               </Link>
//             </li>
//             <li
//               className={`nav-item ${activeTab === "settings" ? "active" : ""}`}
//             >
//               <Link to="/settings" onClick={() => handleTabChange("settings")}>
//                 Settings
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route path="/dashboard" component={Dashboard} />
//           <Route path="/ledger" component={Ledger} />
//           <Route path="/reports" component={Reports} />
//           <Route path="/settings" component={Settings} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;
