import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import { ShoppingCartContext } from "../ShoppingCartContext";

const navbar = () => {
    const context = useContext(ShoppingCartContext);
    const activeStyle = "underline underline-offset-4";
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const handleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    return (
        <div>
            <nav className="flex justify-between items-center border fixed z-10 w-full py-2 top-0 bg-white">
                <ul className="flex items-center gap-3 ml-4">
                    <li className="font-semibold text-lg">
                        <NavLink to="/">Shopi</NavLink>
                    </li>
                    <li className="tablet:hidden">
                        <NavLink
                            to="/"
                            onClick={() => context.setSearchByCategory("")}
                            className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        >
                            All
                        </NavLink>
                    </li>
                    <li className="tablet:hidden">
                        <NavLink
                            to="/clothes"
                            onClick={() => context.setSearchByCategory("clothes")}
                            className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        >
                            Clothes
                        </NavLink>
                    </li>
                    <li className="tablet:hidden">
                        <NavLink
                            to="/electronics"
                            onClick={() => context.setSearchByCategory("electronics")}
                            className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        >
                            Electronics
                        </NavLink>
                    </li>
                    <li className="tablet:hidden">
                        <NavLink
                            to="/furnitures"
                            onClick={() => context.setSearchByCategory("furnitures")}
                            className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        >
                            Furnitures
                        </NavLink>
                    </li>
                    <li className="tablet:hidden">
                        <NavLink
                            to="/toys"
                            onClick={() => context.setSearchByCategory("toys")}
                            className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        >
                            Toys
                        </NavLink>
                    </li>
                    <li className="tablet:hidden">
                        <NavLink
                            to="/others"
                            onClick={() => context.setSearchByCategory("others")}
                            className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        >
                            Others
                        </NavLink>
                    </li>
                </ul>
                <ul className="flex items-center gap-3 mr-4">
                    <li className="text-black/60">davidS26@google.com</li>
                    <li className="tablet:hidden">
                        <NavLink
                            to="/my-orders"
                            className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        >
                            My Orders
                        </NavLink>
                    </li>
                    <li className="tablet:hidden">
                        <NavLink
                            to="/my-account"
                            className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        >
                            My Account
                        </NavLink>
                    </li>
                    <li className="tablet:hidden">
                        <NavLink
                            to="/sing-in"
                            className={({ isActive }) => (isActive ? activeStyle : undefined)}
                        >
                            Sign In
                        </NavLink>
                    </li>
                    <li onClick={context.openCheckoutSide} className="cursor-pointer">
                        <AiOutlineShoppingCart size={20} />
                        <span className="text-[10px] absolute right-14 top-1 bg-pink-300 px-1 rounded-full font-semibold z-10 xl:right-7">
                            {context.count}
                        </span>
                    </li>
                    <li
                        onClick={handleSideMenu}
                        className="xl:hidden hover:cursor-pointer relative"
                    >
                        <AiOutlineMenu />
                    </li>
                </ul>
            </nav>
            {isSideMenuOpen && <Sidebar />}
        </div>
    );
};

export default navbar;
