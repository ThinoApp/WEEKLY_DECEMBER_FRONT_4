import config from '@/utils/config';
import './Features.scss';
import { IoMdRestaurant } from 'react-icons/io';
import { PiAlienBold } from 'react-icons/pi';
import { MdOutlineAllInclusive } from 'react-icons/md';
import { motion } from 'framer-motion';
import { fadeInTopLeft } from '@/utils/animation';
const Features = () => {
    return (
        <div className="Features">
            <h2>FEATURES</h2>
            <p className="Features-subtitle">
                Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan
                their schedule.
            </p>
            <div className="Feature-content">
                <motion.div
                    variants={fadeInTopLeft}
                    initial="hidden"
                    whileInView="show"
                    className="Feature-chart"
                    transition={{
                        duration: 0.5,
                    }}
                >
                    <picture>
                        <source
                            media="(min-width:640px)"
                            srcSet={`${config.image_base}/assets/images/Chat_Bot_desktop.png`}
                        />
                        <img src={`${config.image_base}/assets/images/Chat_Bot.png`} alt="Chat bot" />
                    </picture>
                    <picture className="line-chart">
                        <source
                            media="(min-width:640px)"
                            srcSet={`${config.image_base}/assets/images/Line_Chart_desktop.png`}
                        />
                        <img src={`${config.image_base}/assets/images/Line_Chart.png`} alt="Line Chart" />
                    </picture>
                </motion.div>
                <ul className="Feature-list">
                    <li>
                        <h3>
                            <motion.span
                                initial={{ rotate: '0deg' }}
                                whileInView={{
                                    rotate: '360deg',
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: +Infinity,
                                    repeatDelay: 1,
                                    repeatType: 'mirror',
                                }}
                            >
                                <IoMdRestaurant className="icon" />
                            </motion.span>
                            <span>A single source of truth</span>
                        </h3>
                        <p>When you add work to your Slate calendar we automatically calculate useful insights</p>
                    </li>
                    <li>
                        <h3>
                            <motion.span
                                initial={{ rotate: '0deg' }}
                                whileInView={{
                                    rotate: '360deg',
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: +Infinity,
                                    repeatDelay: 1,
                                    repeatType: 'mirror',
                                }}
                            >
                                <PiAlienBold className="icon" />
                            </motion.span>
                            <span>A single source of truth</span>
                        </h3>
                        <p>When you add work to your Slate calendar we automatically calculate useful insights</p>
                    </li>
                    <li>
                        <h3>
                            <motion.span
                                initial={{ rotate: '0deg' }}
                                whileInView={{
                                    rotate: '180deg',
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: +Infinity,
                                    repeatDelay: 1,
                                    repeatType: 'mirror',
                                }}
                            >
                                <MdOutlineAllInclusive className="icon" />
                            </motion.span>
                            <span>A single source of truth</span>
                        </h3>
                        <p>When you add work to your Slate calendar we automatically calculate useful insights</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Features;
