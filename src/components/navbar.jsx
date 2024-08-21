"use client"
import Link from "next/link";
import { useState } from "react";
import { IconContext } from "react-icons";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Navlink from "./navlink";

const links = [
    {url: "/", title: "Home"},
    {url: "/about", title: "About"},
    {url: "/projects", title: "Projects"},
    {url: "/contact", title: "Contact"},
];

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30">
            {/* LOGO */}
            <div className="z-40 justify-center">
                <Link href="/">
                    <img src="/logo.png" className="w-16 hover:scale-125" alt="logo" />
                </Link>
            </div>
            {/* LINKS */}
            <div className="hidden md:flex gap-12">
                {links.map((link) => (
                    <Navlink link={link} key={link.title} />
                ))}
            </div>
            {/* ICONS */}
            <div className="hidden md:flex gap-4">
                <IconContext.Provider value={{className: "hover:scale-125 hover:fill-watermelon", size:24}}>
                    <a href="https://github.com/jonperk318">
                        <FaGithub />
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{className: "hover:scale-125 hover:fill-yellow", size:24}}>
                    <a href="https://www.instagram.com/jonperk318/">
                        <FaInstagram />
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{className: "hover:scale-125 hover:fill-light-blue", size:24}}>
                    <a href="https://www.linkedin.com/in/jonathan-perkins-0b1411285/">
                        <FaLinkedin />
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{className: "hover:scale-125 hover:fill-blue", size:24}}>
                    <a href="https://www.facebook.com/jonathan.davidperkins">
                        <FaFacebook />
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{className: "hover:scale-125 hover:fill-lilac", size:24}}>
                    <a href="mailto:jonperk318@gmail.com">
                        <IoMdMail />
                    </a>
                </IconContext.Provider>
            </div>
            {/* MENU */}
            <div className="md:hidden">
                {/* HAMBURGER */}
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={()=>setOpen(!open)}>
                    <div className="w-10 h-1 bg-fusha rounded"></div>
                    <div className="w-10 h-1 bg-fusha rounded"></div>
                    <div className="w-10 h-1 bg-fusha rounded"></div>
                </button>
                {/* MENU LINKS */}
                {open && (
                    <div className="absolute top-0 left-0 w-screen h-screen animated-background bg-black bg-gradient-to-r from-black from-10% via-watermelon/[0.3] to-black flex flex-col items-center justify-center gap-10 text-4xl">
                        {links.map(link => (
                            <Link href={link.url} key={link.title}>{link.title}</Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;