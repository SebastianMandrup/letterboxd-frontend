import type { FunctionComponent } from 'react';
import SectionGetStarted from '../sectionGetStarted/SectionGetStarted';
import styles from './backdrop.module.css';

interface BackdropProps {
    src: string;
    alt: string;
    caption: string;
}

const Backdrop: FunctionComponent<BackdropProps> = ({ src, alt, caption }) => {
    return (
        <section id={styles.sectionBackdrop}>
            <div className={styles.imageWrapper}>
                <img src={src} alt={alt} />
                <div className={styles.overlay}>
                </div>
            </div>
            <span>{caption}</span>
            <SectionGetStarted />
        </section>

    );
}

export default Backdrop;