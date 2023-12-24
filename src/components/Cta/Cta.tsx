import config from '@/utils/config';
import './Cta.scss';
import { motion } from 'framer-motion';
import { fadeInDown, fadeInTopLeft } from '@/utils/animation';
const Cta = () => {
    return (
        <div className="Cta">
            <div className="Cta-container">
                <motion.div variants={fadeInDown} initial="hidden" whileInView="show">
                    <h2>OpenType feature and Variable fonts</h2>
                    <button>Try For Free</button>
                </motion.div>
                <motion.picture variants={fadeInTopLeft} initial="hidden" whileInView="show">
                    <source
                        media="(min-width: 640px)"
                        srcSet={`${config.image_base}/assets/images/Cta__img_desktop.png`}
                    />
                    <img src={`${config.image_base}/assets/images/Cta__img.png`} alt="Cta illustration" />
                </motion.picture>
            </div>
        </div>
    );
};
export default Cta;
