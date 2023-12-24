import config from '@/utils/config';
import './Partner.scss';
import { motion } from 'framer-motion';
import { zoomIn } from '@/utils/animation';
const partners = [1, 2, 3, 4, 5, 6];
const Partner = () => {
    return (
        <div className="Partner">
            <h2>Partners</h2>
            <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
            <ul>
                {partners.map((item, index) => (
                    <motion.img
                        variants={zoomIn}
                        initial="hidden"
                        whileInView="show"
                        transition={{
                            delay: index * 0.1,
                        }}
                        src={`${config.image_base}/assets/images/partners/${item}.png`}
                        alt="partners logo"
                        key={item}
                    />
                ))}
            </ul>
            <button>All Partners</button>
        </div>
    );
};
export default Partner;
