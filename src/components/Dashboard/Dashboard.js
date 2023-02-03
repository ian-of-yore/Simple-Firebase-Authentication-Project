import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='border-4 border-indigo-800 min-h-screen pt-40'>
            <div className='grid grid-cols-1 gap-5'>
                <Link to='/'><button className='btn'>Add Student</button></Link>
                <Link to='/allStudents'><button className='btn'>Manage Students</button></Link>
                <button className='btn'>LogOut</button>
            </div>
        </div>
    );
};

export default Dashboard;