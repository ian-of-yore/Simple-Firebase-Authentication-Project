import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import NavigationBar from '../components/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div className='w-11/12 mx-auto lg:w-10/12'>
            <NavigationBar></NavigationBar>
            <div className='grid lg:grid-cols-10 gap-4'>
                <div className='lg:col-span-2 hidden lg:flex'>
                    <Dashboard></Dashboard>
                </div>
                <div className='lg:col-span-8 border-4 border-indigo-900 min-h-screen'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;