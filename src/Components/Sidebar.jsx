import { NavLink } from "react-router-dom";
const Sidebar = () => {
    const activeStyle = "underline underline-offset-4";
    return (
        <nav className="flex items-center justify-center fixed top-12 right-0 w-64 bg-white p-4 z-10 rounded-l-md">
            <ul className='flex flex-col items-center gap-4 ml-4'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li className="hover:bg-slate-100 transition-colors duration-300 px-2 rounded-md">
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li className="hover:bg-slate-100 transition-colors duration-300 px-2 rounded-md">
                    <NavLink
                        to='/clothes'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li className="hover:bg-slate-100 transition-colors duration-300 px-2 rounded-md">
                    <NavLink
                        to='/electronics'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li className="hover:bg-slate-100 transition-colors duration-300 px-2 rounded-md">
                    <NavLink
                        to='/furnitures'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Furnitures
                    </NavLink>
                </li>
                <li className="hover:bg-slate-100 transition-colors duration-300 px-2 rounded-md">
                    <NavLink
                        to='/toys'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Toys
                    </NavLink>
                </li>
                <li className="hover:bg-slate-100 transition-colors duration-300 px-2 rounded-md">
                    <NavLink
                        to='/others'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
                <li className='text-black/60 mt-4 hover:underline-offset-2 cursor-pointer'>
                    davidS26@google.com
                </li>
                <li className="hover:bg-slate-100 transition-colors duration-300 px-2 rounded-md">
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li className="hover:bg-slate-100 transition-colors duration-300 px-2 rounded-md">
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li className="hover:bg-slate-100 transition-colors duration-300 px-2 rounded-md">
                    <NavLink
                        to='/sing-in'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Sign In
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;