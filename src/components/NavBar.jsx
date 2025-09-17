import React, {useEffect, useState} from 'react'
import {site} from '../config/site.js'
import SunIcon from '../assets/sun.svg?react';
import MoonIcon from '../assets/moon.svg?react';

const themes = [
    'dark',
    'light',
    'corporate',
    'business',
    'cupcake',
    'emerald',
    'synthwave',
    'dracula',
    'winter',
    'lofi',
    'pastel',
    'fantasy',
    'forest',
    'luxury',
    'dim',
    'nord',
    'retro',
    'cmyk',
]

export default function NavBar() {

    const [switchThemes, setSwitchThemes] = useState({
        lightTheme: 'corporate',
        darkTheme: 'business'
    })
    const fromLocalStorage = (key, defaultValue) => {
        try {
            const valueFromLocalStorage = JSON.parse(localStorage.getItem(key));
            let finalValue = valueFromLocalStorage !== null ? valueFromLocalStorage : defaultValue;
            console.log("fromLocalStorage Loaded ", key, finalValue);
            return finalValue;
        } catch (e) {
            console.log(e);
        }
        return defaultValue;

    };

    const [isdark, setIsdark] = useState(() => fromLocalStorage('isdark', false));

    const getCurrentTheme = () => isdark ? switchThemes.darkTheme : switchThemes.lightTheme;

    useEffect(() => {
        console.log("useEffect isdark", isdark, " current theme ", switchThemes);
        document.documentElement.setAttribute('data-theme', getCurrentTheme());
        localStorage.setItem('isdark', JSON.stringify(isdark));
    }, [isdark, switchThemes]);

    const links = [
        {id: 'home', label: 'Home'},
        {id: 'skills', label: 'Skills'},
        // {id: 'bigsix', label: 'Big Six'},
        {id: 'projects', label: 'Projects'},
        {id: 'timeline', label: 'Timeline'},
        {id: 'contact', label: 'Contact'},
    ]
    // DaisyUI built-in themes to expose in the dropdown (excluding light/dark shown as toggle)

    const setTheme = e => {
        setSwitchThemes({...switchThemes, lightTheme: e.target.value});
        console.log("setTheme " + e.target.value);
    };

    const NavItems = () => <>
        {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="hover:text-primary transition-colors">
                {l.label}
            </a>
        ))}
    </>;

    function ThemeSelector() {
        return <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-sm">Theme</label>
            <ul tabIndex={0}
                className="dropdown-content menu menu-sm bg-base-200 rounded-box z-[1] mt-2 w-44 p-2 shadow">
                {themes.map((t) => (
                    <li key={t}>
                        <input
                            type="radio"
                            name="theme"
                            className="btn btn-ghost btn-sm justify-start"
                            onClick={setTheme}
                            aria-label={t}
                            value={t}
                        />
                    </li>
                ))}
            </ul>
        </div>;
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-base-300">
            {/*<div className="section">*/}
            <div className="section navbar px-0 h-16">
                <div className="navbar-start font-extrabold text-primary text-lg">{site.name}</div>

                <nav className="hidden sm:flex gap-6 text-base-content/80">
                    <NavItems/>
                </nav>
                <div className="navbar-end gap-3 ">
                    {/* Light/Dark quick toggle */}
                    <label className={`swap swap-rotate`}>
                        <input type="checkbox" checked={isdark} onChange={() => setIsdark(!isdark)}/>
                        <SunIcon className="swap-off fill-current w-6 h-6 text-base-content/80 hover:text-primary transition-colors duration-200"/>
                        <MoonIcon className="swap-on fill-current w-6 h-6 text-base-content/80 hover:text-primary transition-colors duration-200"/>
                    </label>
                    {/*<ThemeSelector/>*/}
                </div>
            </div>
        </header>
    )
}
