import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import logo from '/logo.png';
import './Header.css';
import { useState } from 'react';

const Header = () => {
    const [show, setShow] = useState(false);

    const HamburgerHandler = () => {
        setShow(!show);
    }
    return (
        <>
            <nav className="w-full bg-black text-yellow p-3 h-16">
                <div className="container mx-auto flex items-center justify-between">
                    <div>
                        <a href="#" className="flex items-center gap-2">
                            <img src={logo} alt="logo" className="w-12" />
                            <p className="text-yellow">Car Care</p>
                        </a>
                    </div>
                    <div>
                        <ul className={`flex gap-4 ${show ? 'right-[0px]' : ''}`}>
                            <li className="py-1">
                                <a href="#">Home</a>
                            </li>
                            <li className="py-1">
                                <a href="#">About</a>
                            </li>
                            <li className="py-1">
                                <a href="#">Services</a>
                            </li>
                            <li className="py-1">
                                <a href="#">Team</a>
                            </li>
                            <li className="py-1">
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-yellow text-black w-[30px] h-[30px] flex items-center justify-center rounded z-10 lg:hidden md:hidden sm:flex cursor-pointer" onClick={HamburgerHandler}>
                        {show ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header