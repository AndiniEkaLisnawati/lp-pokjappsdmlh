import { useEffect, useState } from 'react';
import logo from '../assets/icon/icon.png';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
}, []);

    return (
        <header className={`transition-all duration-300 ease-in-out ${
            scrolled ? 'bg-teal-500 shadow-md' : 'bg-transparent'
        } px-6 py-2 fixed w-full z-20`}>
            <div className="max-w-7xl mx-auto flex items-center gap-4">
                <img
                    src={logo}
                    alt="Logo Pokja"
                    className="w-14 h-14 object-contain rounded"
                />
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                    POKJAPPSDMLH
                </h1>
            </div>
        </header>
    );
}