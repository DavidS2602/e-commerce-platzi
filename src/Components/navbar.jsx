import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"

const navbar = () => {
    const activeStyle = "underline underline-offset-4";
    return (
        <nav className="flex justify-between items-center border fixed z-10 w-full py-2 top-0">
            <ul className='flex items-center gap-3 ml-4'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li className="tablet:hidden">
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li className="tablet:hidden">
                    <NavLink
                        to='/clothes'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li className="tablet:hidden">
                    <NavLink
                        to='/electronics'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li className="tablet:hidden">
                    <NavLink
                        to='/furnitures'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Furnitures
                    </NavLink>
                </li>
                <li className="tablet:hidden">
                    <NavLink
                        to='/toys'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Toys
                    </NavLink>
                </li>
                <li className="tablet:hidden">
                    <NavLink
                        to='/others'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3 mr-4'>
                <li className='text-black/60'>
                    davidS26@google.com
                </li>
                <li className="tablet:hidden">
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li className="tablet:hidden">
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li className="tablet:hidden">
                    <NavLink
                        to='/sing-in'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Sign In
                    </NavLink>
                </li>
                <li className="">
                <AiOutlineShoppingCart />
                </li>
                <li className="xl:hidden">
                    <AiOutlineMenu />
                </li>
            </ul>
        </nav>
    );
};

export default navbar;
