import './Footer.scss';
import { BiMap } from 'react-icons/bi';
import { IoMdPhonePortrait } from 'react-icons/io';
import { FaTwitter, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { slideLeft } from '@/utils/animation';

const Footer = () => {
    return (
        <ul className="Footer">
            <motion.li
                variants={slideLeft}
                initial="hidden"
                whileInView="show"
                transition={{
                    delay: 0.1,
                }}
            >
                <h3>Fingertipe</h3>
                <ul>
                    <li>Home</li>
                    <li>Examples</li>
                    <li>Pricing</li>
                    <li>Updates</li>
                </ul>
            </motion.li>
            <motion.li
                variants={slideLeft}
                initial="hidden"
                whileInView="show"
                transition={{
                    delay: 0.2,
                }}
            >
                <h3>Resources</h3>
                <ul>
                    <li>Home</li>
                    <li>Examples</li>
                    <li>Pricing</li>
                    <li>Updates</li>
                </ul>
            </motion.li>
            <motion.li
                variants={slideLeft}
                initial="hidden"
                whileInView="show"
                transition={{
                    delay: 0.3,
                }}
            >
                <h3>About</h3>
                <ul>
                    <li>Home</li>
                    <li>Examples</li>
                    <li>Pricing</li>
                    <li>Updates</li>
                </ul>
            </motion.li>
            <motion.li
                variants={slideLeft}
                initial="hidden"
                whileInView="show"
                transition={{
                    delay: 0.4,
                }}
                className="Footer-socialNetwork"
            >
                <p>
                    <BiMap className="icon" />
                    <span>7480 Mockingbird Hill undefined</span>
                </p>
                <p>
                    <IoMdPhonePortrait className="icon" />
                    <span>(239) 555-0108</span>
                </p>
                <div className="Footer-social">
                    <FaTwitter className="icon" />
                    <FaFacebookSquare className="icon" />
                    <FaLinkedin className="icon" />
                </div>
            </motion.li>
        </ul>
    );
};
export default Footer;
