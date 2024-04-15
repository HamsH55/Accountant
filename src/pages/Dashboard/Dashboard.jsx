import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { CiShoppingCart } from "react-icons/ci";
import { CiBank } from "react-icons/ci";

const Dashboard = () => {
    return (
        <div>
           <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
  <Outlet/>
    <label htmlFor="my-drawer-2" className=" lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="flex py-2 text-[18px] flex-col gap-2 p-4 w-64 min-h-full text-white bg-black ">
      {/* Sidebar content here */}
      <li className='cursor-pointer'><Link className='flex items-center gap-2' to='/dashboard'><MdOutlineDashboard />
 Dashboard </Link></li>
      <li className='cursor-pointer'><Link  to='report' className='flex items-center gap-2'> <TbReport />
Report </Link></li>
      <li className='cursor-pointer'><Link to='sells' className='flex items-center gap-2'><CiShoppingCart />
Sells </Link></li>
      <li className='cursor-pointer'><Link to='bankaccounts'className='flex items-center gap-2'><CiBank />
Bank Account </Link></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;