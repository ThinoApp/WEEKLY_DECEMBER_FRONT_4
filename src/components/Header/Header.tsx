import config from '@/utils/config';

import { MdClose } from 'react-icons/md';
import { BiMenuAltRight } from 'react-icons/bi';
import './Header.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInDown } from '@/utils/animation';
const Header = () => {
    return (
        <motion.div variants={fadeInDown} initial="hidden" whileInView="show" className="Header">
            <img src={`${config.image_base}/assets/images/logo dark.png`} alt="logo" />

            <MenuDesktop />
            <button className="btn-login">Login</button>
            <MenuMobile />
        </motion.div>
    );
};

const MenuDesktop = () => {
    return (
        <ul className="MenuDesktop">
            <motion.li className="hover:animate-ping">Home</motion.li>
            <motion.li className="hover:animate-ping ">Product</motion.li>
            <motion.li className="hover:animate-ping ">About</motion.li>
            <motion.li className="hover:animate-ping ">Contact</motion.li>
        </ul>
    );
};

const MenuMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="MenuMobile">
            <button onClick={() => setIsOpen(true)}>
                <BiMenuAltRight className="icon" />
            </button>
            <ul className={`${isOpen ? 'show' : 'hide'}`}>
                <li>
                    <MdClose className="icon" onClick={() => setIsOpen(false)} />
                </li>
                <li>Home</li>
                <li>Product</li>
                <li>About</li>
                <li>Contact</li>
                <button className="btn-login">Login</button>
            </ul>
        </div>
    );
};
export default Header;
