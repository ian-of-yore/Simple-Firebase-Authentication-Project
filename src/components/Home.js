import React from 'react';

const Home = () => {
    return (
        <div>
            <h3 className='text-5xl font-bold my-8'>This is Home Component</h3>
            <p className='font-xl font-semibold'>Anyone can access this component whether he/she has logged in or not</p>
        </div>
    );
};

export default Home;