import React from 'react';

const Orders = () => {
    return (
        <div>
            <h2 className='text-4xl my-8 font-bold'>This is the Orders Component</h2>
            <p className='text-xl font-semibold'>This is a private route. The user can only access this if he/she has logged in the webite</p>
        </div>
    );
};

export default Orders;