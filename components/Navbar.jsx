"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/goolluck_logo.svg";
import logo_black from "@/public/goolluck_logo_black.svg";
import { menuLinks } from "@/constants";
import Link from "next/link";
import Button from "./Button";
import { LuMenu } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleChange = () => {
        setNav(!nav);
    };

    return (
        <div className="w-full h-20 px-5 lg:px-10">
            <div className="flex items-center justify-between w-full h-full">
                {/* logo */}
                <Link href="/">
                    <Image src={logo} alt="logo" width={300} height={300} priority />
                </Link>

                <div className="hidden md:flex items-center gap-8 text-lg">
                    {menuLinks.map((list, index) => {
                        return (
                            <ul
                                key={index}
                                className="hover:text-secondary duration-500"
                            >
                                <Link href={list.path}>
                                    <li>{list.label}</li>
                                </Link>
                            </ul>
                        );
                    })}
                    <Link href="/contact-us">
                        <Button title="Contact Us" />
                    </Link>
                </div>

                <div
                    className="block md:hidden rounded-full p-2 bg-secondary text-background"
                    onClick={handleChange}
                >
                    {nav ? <IoCloseSharp size={25} /> : <LuMenu size={25} />}
                </div>
            </div>

            <div
                className={
                    nav
                        ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-primary p-10 ease-in duration-500"
                        : "fixed left-[-100%] top-0 h-screen p-10 ease-in duration-700"
                }
            >
                <Link href="/">
                    <Image
                        src={logo_black}
                        alt="logo"
                        width={250}
                        height={250}
                        priority
                    />
                </Link>

                <div className="flex flex-col items-center justify-center w-full h-full gap-10">
                    {menuLinks.map((link, index) => (
                        <ul
                            key={index}
                            className="text-xl text-background"
                            onClick={handleChange}
                        >
                            <Link href={link.path}>
                                <li className="text-center">{link.label}</li>
                            </Link>
                        </ul>
                    ))}

                    <Link href="/contact-us">
                        <Button
                            className="text-background hover:bg-primary"
                            title="Contact Us"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
