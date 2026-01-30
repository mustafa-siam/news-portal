"use client"
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Shironam from '../home/Shironam';

const Navbar = () => {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "News", href: "/news" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" }
    ]
    
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false)
    const currentPath = pathname.replace("/", '');
    const navItemStyle = (href: string) => {
        const pathName = href.replace("/", '');
        return currentPath === pathName 
            ? 'text-golden hover:text-gray-300 transition-colors capitalize' 
            : 'text-white hover:text-gray-300 transition-colors capitalize';
    }

    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => { document.body.style.overflow = "auto"; }
    }, [isOpen])

    return (
        <header className="fixed top-0 left-0 w-full z-[1000]">
            <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 px-[5%] shadow-sm relative z-50">
                <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between">
                    <Link href="/" className="shrink-0">
                        <Image src='/logo.png' alt='Logo' width={130} height={45} className='w-24 md:w-32 object-contain' priority />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8 text-lg font-sans">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} 
                                className={pathname === link.href ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-600'}>
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center space-x-6">
                        <div className='flex items-center gap-3 text-sm font-medium text-gray-500'>
                            <Sun size={16} />
                            <Switch />
                            <Moon size={16} />
                        </div>
                        <Button className="bg-blue-600">LogIn</Button>
                    </div>

            
                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-black focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {!isOpen && <Shironam />}

            <div className={`fixed top-0 left-0 w-full flex flex-col gap-4 bg-black/95 backdrop-blur-md pt-28 pb-10 z-40 px-[8%] transform duration-700 lg:hidden text-white text-xl font-sans shadow-2xl ${
                isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            }`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={closeMenu}
                        className={`${navItemStyle(link.href)} py-2 border-b border-white/5`}
                    >
                        {link.name}
                    </Link>
                ))}

                <div className="flex flex-col ">
                    <Button onClick={closeMenu} className="w-full bg-blue-600 py-6 text-lg rounded-xl">
                        Contact Us
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Navbar;