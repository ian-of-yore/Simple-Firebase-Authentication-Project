import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const LogIn = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegistration = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password)
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <form onSubmit={handleRegistration} className="form-control w-full max-w-xs">
                <h1 className='text-4xl font-semibold text-black mb-8'>Register</h1>
                <input type="email" name='email' placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                <input type="password" name='password' placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
                <button type="submit" className='btn btn-wide'>Register</button>
            </form>
        </div>
    );
};

export default LogIn;