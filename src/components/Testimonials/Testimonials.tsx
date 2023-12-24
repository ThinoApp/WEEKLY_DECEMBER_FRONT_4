import config from '@/utils/config';
import './Testimonials.scss';
import { listes } from './Testimonials.utils';
import { motion } from 'framer-motion';
import { zoomIn } from '@/utils/animation';
const Testimonials = () => {
    return (
        <div className="Testimonials">
            <h2>Testimonials</h2>
            <ul>
                {listes.map((item, index) => (
                    <motion.li
                        variants={zoomIn}
                        initial={{ ...zoomIn.hidden, backdropFilter: 'blur(0px)' }}
                        whileInView="show"
                        whileHover={{
                            backdropFilter: 'blur(15px)',
                            scale: 1.5,
                        }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="top">
                            <img
                                src={`${config.image_base}/assets/images/avatar/${item.id}.png`}
                                alt="avatar picture"
                            />
                            <div>
                                <p>{item.name}</p>
                                <p>Designer</p>
                            </div>
                        </div>
                        <p className="description">{item.description}</p>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};
export default Testimonials;
