import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h3 className='text-pink-500 font-bold text-xl'>HomeSection--Comming Soon...</h3>
            <button className='w-36 h-10 text-center border border-yellow-500 rounded-lg hover:bg-yellow-500 hover:font-bold'><Link to='/dashboard'>Go to Dashboard</Link></button>
        </div>
    );
};

export default Home;