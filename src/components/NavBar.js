import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import toast, { Toaster } from 'react-hot-toast';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // console.log("successfully log out")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleCheckUserAvaiability = () => {
        if (!user) {
            toast.error("You need to log in to view orders!")
        }
    }

    return (
        <div>
            <Toaster />
            <div className="navbar bg-base-100 sticky top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link className='btn btn-sm btn-outline ml-5' to='/'>Home</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <h3>Greeting! {user ? user.email : 'Wanderer! LogIn/Register'}</h3>
                </div>
                <div className="navbar-end mr-5">
                    <Link onClick={handleCheckUserAvaiability} className='btn btn-sm btn-outline mr-3' to='/orders'>Orders</Link>
                    <Link className='btn btn-sm btn-outline mr-3' to='/register'>Register</Link>
                    {
                        user ? <Link onClick={handleLogOut} className='btn btn-sm btn-outline' >Log Out</Link>
                            : <Link className='btn btn-sm btn-outline mr-3' to='/login'>LogIn</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;