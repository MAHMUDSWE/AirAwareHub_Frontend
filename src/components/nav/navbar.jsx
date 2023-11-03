import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMap } from '@fortawesome/free-solid-svg-icons';

import SideNavToggleButton from './SideNavToggleButton';
import SideNav from './SideNav';
import ToggleSwitch from '../shared/ToggleSwitch';


function NavMenu() {
    return (
        <>
            <ul className="flex justify-center items-center gap-4 text-lg">
                <li
                    className='border-b-blue-500'>
                    <NavLink

                        className={({ isActive }) => isActive ? `text-blue-600 p-3 border-b-4 border-blue-600` : `text-gray-500 transition hover:bg-gray-100 text-lg px-3 py-3 rounded-md`}
                        to="/"
                    >
                        <FontAwesomeIcon icon={faHome} className="mr-2 text-lg " />
                        Home
                    </NavLink>
                </li>

                <li
                >
                    <NavLink
                        className={({ isActive }) => isActive ? `text-blue-600 p-3 border-b-4 border-blue-600` : `text-gray-500 transition hover:bg-gray-100 text-lg px-3 py-3 rounded-md`}
                        to={`/mapview`}

                    >
                        <FontAwesomeIcon icon={faMap} className="mr-2 text-lg" />
                        Map View
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

function Navbar() {

    const [showSideNav, setShowSideNav] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);

    const showSideNavCallback = (value) => {
        setShowSideNav(value);
    }

    const showDropDownCallback = (value) => {
        setShowDropDown(value);
    }

    return (
        <>
            <header
                aria-label="Site Header" className="bg-white shadow-md sticky top-0 z-50">

                <div className=" px-4 sm:px-6 lg:px-8">

                    <div className="flex h-16 items-center justify-between">

                        <div className=" lg:w-1/3 flex items-center">
                            <NavLink
                                to='/'>
                                <h1 className="text-2xl sm:text-4xl font-semibold text-primary text-center" >
                                    Air Aware Hub
                                </h1>
                            </NavLink>
                        </div>

                        <div className="lg:w-1/3 hidden lg:block">
                            <nav aria-label="Site Nav" className=''>
                                {(true) &&
                                    <NavMenu />
                                }
                            </nav>
                        </div>

                        <div className="lg:w-1/3  hidden gap-4 lg:block">
                            <div className="sm:flex justify-end sm:gap-4">
                                <ToggleSwitch />
                            </div>
                        </div>

                        <div className='block lg:hidden'>
                            <ToggleSwitch />
                        </div>
                        <div
                            className="block  lg:hidden">
                            <SideNavToggleButton showSideNavCallback={showSideNavCallback} />
                        </div>
                    </div>

                </div>
            </header>
            <div className='block lg:hidden'>

                <SideNav showSideNav={showSideNav} showDropDown={showDropDown} showDropDownCallback={showDropDownCallback} />
            </div>
        </>
    );
}

export default Navbar;
