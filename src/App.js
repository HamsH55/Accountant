import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './pages/layout/Main';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Report from './pages/Dashboard/Report/Report';
import Income from './pages/Dashboard/Income/Income';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import Sells from './pages/Dashboard/Sells/Sells';
import BankAccounts from './pages/Dashboard/BankAccounts/BankAccounts';

const App = () => {
  return (
    <div>
<Router>
  <Routes>
<Route path='/' element={<Main/>}>
<Route path='/' element={<Home/>}/>
</Route>

<Route path='/dashboard' element={<Dashboard/>}>
<Route path='/dashboard' element={<DashboardHome/>}/>

  <Route path='/dashboard/report' element={<Report/>}/>
  <Route path='/dashboard/sells' element={<Sells/>}/>
  <Route path='/dashboard/bankaccounts' element={<BankAccounts/>}/>
</Route>
</Routes>
</Router>
    </div>
  );
};

export default App;