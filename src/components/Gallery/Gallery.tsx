import { useState } from 'react';
import './Gallery.scss';
import config from '@/utils/config';
import { AnimatePresence, motion } from 'framer-motion';
const Gallery = () => {
    const [isMore, setIsMore] = useState(false);
    const [galleryLength, setGalleryLength] = useState(4);
    const [galleryLengthDesktop, setGalleryLengthDesktop] = useState(7);
    const isMoreBig = (index: number) => {
        if (index >= 5 && (index === 5 || index % 7 === 0 || index % 7 === 2)) {
            return true;
        }
        return false;
    };

    const handleOnClick = () => {
        if (isMore) {
            setGalleryLength(4);
            setGalleryLengthDesktop(7);
        } else {
            setGalleryLength(15);
            setGalleryLengthDesktop(15);
        }
        setIsMore((prev) => !prev);
    };
    return (
        <div className="Gallery">
            <h2>Gallery</h2>
            <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>

            <ul className="Gallery-content desktop">
                <AnimatePresence mode="wait">
                    {Array(galleryLengthDesktop)
                        .fill(0)
                        .map((_, index) => (
                            <motion.li
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    delay: index * 0.02,
                                }}
                                key={index}
                                className={`${isMoreBig(index + 1) && 'expand'}`}
                            >
                                <img
                                    src={`${config.image_base}/assets/images/gallery/${index + 1}.png`}
                                    alt={`Photo-${index}`}
                                />
                            </motion.li>
                        ))}
                </AnimatePresence>
            </ul>
            <ul className="Gallery-content mobile">
                <AnimatePresence mode="wait">
                    {Array(galleryLength)
                        .fill(0)
                        .map((_, index) => (
                            <motion.li
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    delay: index * 0.02,
                                }}
                                key={index}
                                className={`${isMoreBig(index + 1) && 'expand'}`}
                            >
                                <img
                                    src={`${config.image_base}/assets/images/gallery/${index + 1}.png`}
                                    alt={`Photo-${index}`}
                                />
                            </motion.li>
                        ))}
                </AnimatePresence>
            </ul>
            <button onClick={handleOnClick}>{isMore ? 'See less' : 'See more'}</button>
        </div>
    );
};
export default Gallery;
