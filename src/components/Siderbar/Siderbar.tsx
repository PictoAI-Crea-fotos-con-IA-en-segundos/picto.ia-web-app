"use client";
import Link from 'next/link';
import { useState } from 'react';
import { GiStarsStack } from "react-icons/gi";
import { BiPaintRoll } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { CgComment } from "react-icons/cg";
import { CgDigitalocean } from "react-icons/cg";
import {  CgMenu } from "react-icons/cg"; // Añadido CgMenu para el ícono del menú

const Sidebar = () => {
    const [sidebarToggled, setSidebarToggled] = useState(false);
    const toggleSidebar = () => {
        setSidebarToggled(!sidebarToggled);
    }

    return (
        <>
        <aside className="fixed h-auto py-3 overflow-hidden lg:static w-11/12 max-w-[18rem] md:w-72 transition-all -translate-x-full lg:-translate-x-0 bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/40 dark:shadow-gray-800/10 flex flex-col justify-between px-4 lg:transition-none ease-linear">
            <nav className="flex-1 pt-6">
                <ul className="text-gray-700 dark:text-gray-300 space-y-3">
                    <li>
                        <Link href="/roleplay" className="flex items-center px-4 py-2.5 gap-x-3">
                            <span className="p-2 bg-slate-50 rounded-full"><CgDigitalocean className="text-lg text-slate-500"/></span>
                            Roleplay
                        </Link>
                    </li>
                    <li>
                        <Link href="/mass-effects" className="flex items-center px-4 py-2.5 gap-x-3">
                            <span className="p-2 bg-slate-50 rounded-full"><CgDigitalocean className="text-lg text-slate-500"/></span>
                            Mass-Effects
                        </Link>
                    </li>
                    <li>
                        <Link href="/comunidad" className="flex items-center px-4 py-2.5 gap-x-3 text-white rounded-md bg-purple-500">
                            <span className="p-2 bg-slate-50 rounded-full"><GiStarsStack className="text-lg text-slate-500"/></span>
                            Comunidad
                        </Link>
                    </li>
                    <li>
                        <Link href="/impainting" className="flex items-center px-4 py-2.5 gap-x-3">
                            <span className="p-2 bg-slate-50 rounded-full"><BiPaintRoll className="text-lg text-slate-500"/></span>
                            Impainting
                        </Link>
                    </li>
                    <li>
                        <Link href="/importar-safetensor" className="flex items-center px-4 py-2.5 gap-x-3">
                            <span className="p-2 bg-slate-50 rounded-full"><FiSettings className="text-lg text-slate-500"/></span>
                            Importar Safetensor
                        </Link>
                    </li>
                    <li>
                        <Link href="/ux-researcher" className="flex items-center px-4 py-2.5 gap-x-3">
                            <span className="p-2 bg-slate-50 rounded-full"><CgComment className="text-lg text-slate-500"/></span>
                            UX Researcher
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex items-center px-4 py-2.5 gap-x-3">
                            <span className="p-2 bg-slate-50 rounded-full"><CgDigitalocean className="text-lg text-slate-500"/></span>
                            Otro Enlace
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
        <button className="fixed bottom-4 right-4 lg:hidden p-3 bg-purple-500 text-white rounded-full shadow-lg z-50" onClick={toggleSidebar}>
                <CgMenu className="text-2xl"/>
            </button>
    </>
);
};
export default Sidebar;
