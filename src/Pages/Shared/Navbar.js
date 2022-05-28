import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { themeChange } from 'theme-change'
import auth from '../../firebase.init';

const Navbar = ({ children }) => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
        navigate('/login')
    };
    const [theme, setTheme] = useState(false);
    useEffect(() => {
        setTheme(themeChange(false));
    }, [theme]);

    const menuItems = <>
        <li><NavLink className='lg:font-bold uppercase mx-2' to="/">Home</NavLink></li>
        <li><NavLink className='lg:font-bold uppercase mx-2' to="/allProducts">All Products</NavLink></li>
        <li><NavLink className='lg:font-bold uppercase mx-2' to="/myPortfolio">My Portfolio</NavLink></li>
        <li><NavLink className='lg:font-bold uppercase mx-2' to="/blogs">Blogs</NavLink></li>
        <li>{user ? <NavLink className='lg:font-bold uppercase my-2 lg:my-0 lg:mx-2' to="/dashboard">Dashboard</NavLink> : ''}</li>
        <li>{user ? <button onClick={logout} className="lg:font-bold uppercase mx-2"><span className=' text-sm text-red-500'>{user.displayName}</span> SignOut</button> : <NavLink className='font-bold uppercase mx-2' to="/login">Login</NavLink>}</li>
    </>;


    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-200">
                    <div className="flex-none lg:hidden">
                        <label for="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2"><Link to="/" className="btn btn-ghost normal-case ml-2 lg:ml-0 lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-mono">Mobile Manufacture</Link></div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label for="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {menuItems}
                </ul>

            </div>
        </div>
    );
};

export default Navbar;