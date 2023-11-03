import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMap } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


function NavMenu() {
    return (
        <>
            <ul >
                <li className='gap-1 border-b-2 border-blue-200'>
                    <NavLink
                        to="/home"
                    >
                        <div className=' text-white text-xl  px-6 py-2 hover:bg-blue-400'>
                            <FontAwesomeIcon icon={faHome} className="mr-2" />
                            Home
                        </div>
                    </NavLink>
                </li>

                <li className='gap-1 border-b-2 border-blue-200'>
                    <NavLink
                        to="/mapview"
                    >
                        <div className=' text-white text-xl  px-6 py-2 hover:bg-blue-400'>
                            <FontAwesomeIcon icon={faMap} className="mr-2" />
                            Map View
                        </div>
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default function SideNav({ showSideNav }) {

    return (
        <>
            <div
                className={`fixed top-16 z-30  left-0 w-full bg-white shadow-lg transition-transform duration-1000 ease-in-out
                ${showSideNav ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-100 -translate-y-full'}`}
            >
                <div className=" bg-blue-500">

                    <div className="block ">
                        <nav aria-label="Site Nav">
                            {(true) && (
                                <NavMenu />
                            )}
                        </nav>
                    </div>

                </div>
            </div>
        </>
    )
}
