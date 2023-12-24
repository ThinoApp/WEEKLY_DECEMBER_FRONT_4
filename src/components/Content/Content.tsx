import config from '@/utils/config';
import './Content.scss';
import { motion } from 'framer-motion';
import { fadeInDown } from '@/utils/animation';
const Content = () => {
    return (
        <div className="Content">
            <h2>Contents</h2>
            <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
            <div className="Content-elements">
                <motion.div
                    variants={fadeInDown}
                    initial="hidden"
                    whileInView="show"
                    transition={{
                        duration: 0.5,
                    }}
                    className="Content-item"
                >
                    <h3>Work</h3>
                    <p>Ever wondered if you're too reliant on a client for work? Slate helps you identify .</p>
                    <button>Sign Up</button>
                    <img src={`${config.image_base}/assets/images/Macbook Pro.png`} alt="Macbook pro" />
                </motion.div>
                <motion.div
                    variants={fadeInDown}
                    initial="hidden"
                    whileInView="show"
                    transition={{
                        duration: 0.5,
                        delay: 0.3,
                    }}
                    className="Content-item"
                >
                    <h3>Design with real data</h3>
                    <p>Ever wondered if you're too reliant on a client for work? Slate helps you identify .</p>
                    <button>Try For Free</button>
                    <img src={`${config.image_base}/assets/images/Boards Notifications.png`} alt="Boad notification" />
                </motion.div>
            </div>
        </div>
    );
};
export default Content;
