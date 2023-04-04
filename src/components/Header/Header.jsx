import React, { useState } from 'react';
import { BoltIcon,ArrowRightCircleIcon,XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [istrueButton,setistrueButton] = useState(false)
    return (
       <div className='flex justify-between '>
        <div>
        <Link to={'/'} className=' flex items-center'>
            <BoltIcon className='h-6 w-6 text-blue-500' />
            <span>next page</span>
        </Link>
        </div>
        {/* nav link start here*/}
        <div>
        <ul className=' items-center hiden space-x-4 lg:flex'>
            <li>
                <NavLink to={'/'}
                className={({isActive})=>isActive ? 'text-blue-600' : ''}
                >
                    home
                </NavLink>
            </li>
            <li>
                <NavLink to={'books'}
                className={({isActive})=>isActive ? 'text-blue-600' : ''}
                >
                    books
                </NavLink>
            </li>
            <li>
                <NavLink to={'about'}
                className={({isActive})=>isActive ? 'text-blue-600' : ''}
                >
                    about
                </NavLink>
            </li>
        </ul>
        </div>
       </div>
    );
};

export default Header;