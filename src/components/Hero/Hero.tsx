import config from '@/utils/config';
import Header from '../Header/Header';
import './Hero.scss';
import { motion } from 'framer-motion';
import { fadeInDown, staggerContainer } from '@/utils/animation';
import { TypingH1 } from '../AnimatedComponents/AnimatedComponents';
import Spline from '@splinetool/react-spline';

const Hero = () => {
    return (
        <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="Hero"
        >
            <Header />
            <TypingH1 title={`Work at the speed \nof thought`} className="hidden sm:block" />
            <TypingH1 title={`Work at\n the speed \nof thought`} className="hidden xsm:block sm:hidden" />
            <TypingH1 title={`Work\nat\n the speed \nof thought`} className="block xsm:hidden" />
            {/* <h1>Work at the speed of thought</h1> */}
            <p>
                Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan
                their schedule.
            </p>
            <div className="btn-container">
                <button>Try For Free</button>
                <button>Learn More</button>
            </div>
            <motion.div
                className="screen-picture-lg hidden lg:block"
                variants={fadeInDown}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                {/* <picture>
                    <source
                        media="(min-width:640px)"
                        srcSet={`${config.image_base}/assets/images/screensdesktop.png`}
                    />
                    <img src={`${config.image_base}/assets/images/screens.png`} alt="screens image" />
                </picture> */}
                <Spline scene="https://prod.spline.design/NSgyMJxXaLQdEyjh/scene.splinecode" />
            </motion.div>
            <motion.div
                className="screen-picture md:hidden"
                variants={fadeInDown}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <picture>
                    <source
                        media="(min-width:640px)"
                        srcSet={`${config.image_base}/assets/images/screensdesktop.png`}
                    />
                    <img src={`${config.image_base}/assets/images/screens.png`} alt="screens image" />
                </picture>
                <Spline scene="https://prod.spline.design/NSgyMJxXaLQdEyjh/scene.splinecode" />
            </motion.div>
        </motion.div>
    );
};
export default Hero;
