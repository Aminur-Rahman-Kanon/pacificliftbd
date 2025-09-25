import React from 'react';
import styles from './additionalTopbar.module.css';
import { Phone } from 'lucide-react';

const AdditionalTopbar = () => {
    return (
        <div className={styles.additionalTopbar}>
            <a href='tel:008801894244366' className={styles.link}>
                <Phone color='white' size={15} />
                +8801894244366
            </a>
            <a href='tel:008801913777565' className={styles.link}>Blog</a>
            <a href='tel:008801913777565' className={styles.link}>Newsroom</a>
        </div>
    )
}

export default AdditionalTopbar;
