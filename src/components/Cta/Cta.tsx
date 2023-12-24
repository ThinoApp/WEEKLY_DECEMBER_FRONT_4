import config from '@/utils/config';
import './Cta.scss';
const Cta = () => {
    return (
        <div className="Cta">
            <div className="Cta-container">
                <div>
                    <h2>OpenType feature and Variable fonts</h2>
                    <button>Try For Free</button>
                </div>
                <picture>
                    <source
                        media="(min-width: 640px)"
                        srcSet={`${config.image_base}/assets/images/Cta__img_desktop.png`}
                    />
                    <img src={`${config.image_base}/assets/images/Cta__img.png`} alt="Cta illustration" />
                </picture>
            </div>
        </div>
    );
};
export default Cta;
