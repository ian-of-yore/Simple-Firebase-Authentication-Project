import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    console.log('From navbar', user)

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-600 rounded-box w-52 text-white">
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/' className='btn'>Add Student</Link></li>
                        <li><Link to='/allStudents' className='btn'>All Students</Link></li>
                        <li><button className='btn'>LogOut</button></li>
                    </ul>
                </div>
                <div className='hidden lg:flex'>
                    <Link to='/' className='btn'>Logo</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
            </div>
            <div className="navbar-end hidden lg:flex lg:justify-end">
                <Link to='/login' className='btn'>Login</Link>
                <Link to='/registration' className='btn ml-4'>Registration</Link>
            </div>
        </div>
    );
};

export default NavigationBar;