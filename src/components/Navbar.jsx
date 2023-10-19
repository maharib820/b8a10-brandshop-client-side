import { CiUser } from "react-icons/ci";
import { BsBag, } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const location = useLocation();

    const [open, setOpen] = useState(false);

    const links =
        <>
            <li><NavLink className={location.pathname === '/' ? 'text-[#e50010] font-bold' : ""} to={"/"}>Home</NavLink></li>
            <li><NavLink className={location.pathname === '/customerservice' ? 'text-[#e50010] font-bold' : ""} to={"/customerservice"}>Customer Service</NavLink></li>
            <li><NavLink className={location.pathname === '/aboutus' ? 'text-[#e50010] font-bold' : ""} to={"/aboutus"}>About Us</NavLink></li>
            <li><NavLink className={location.pathname === '/membership' ? 'text-[#e50010] font-bold' : ""} to={"/membership"}>Membership for free shipping</NavLink></li>
        </>

    return (
        <div>
            <div className="flex flex-col justify-center lg:grid lg:grid-cols-2 px-2 lg:px-24 xl:px-36 py-10 items-center">
                <div className="col-span-1 flex justify-end items-center font-lobster">
                    {
                        open ?
                        <button onClick={() => setOpen(!open)}><AiOutlineClose className="text-3xl mr-2 lg:hidden"></AiOutlineClose></button> :
                        <button onClick={() => setOpen(!open)}><BiMenuAltLeft className="text-4xl mr-2 lg:hidden"></BiMenuAltLeft></button>     
                    }
                    <h2 className="italic text-4xl lg:text-5xl font-semibold text-[#e50010]">R<span className="text-lg">&</span>T</h2>
                </div>

                {
                    open &&
                    <div className="bg-slate-200 px-3 py-2 text-slate-600 text-sm mt-2">
                        <ul className="flex flex-col justify-center lg:gap-6 xl:gap-10 font-bold space-y-2">
                            {links}
                        </ul>
                    </div>
                }

                <div className="col-span-1 flex justify-end items-center gap-3 md:gap-5 lg:gap-6 mt-4 lg:mt-0">
                    <Link><div className="flex items-center"><CiUser className="text-3xl mr-2 font-bold"></CiUser><p className="font-semibold">Sign in</p></div></Link>
                    <Link><div className="flex items-center"><BsBag className="text-2xl mr-2 font-bold"></BsBag><p className="font-semibold">Shopping bag</p></div></Link>
                </div>
            </div>
            <div className="hidden lg:flex justify-center">
                <ul className="flex justify-center lg:gap-6 xl:gap-10 font-bold">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;