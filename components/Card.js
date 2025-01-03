import Image from 'next/image';
import styles from '../styles/Card.module.css';

const Card = ({ place, tags }) => {
    const placeTags = tags.filter(tag => place.tagIds.includes(tag.id));

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.image}
                />
                <div className={styles.nameOverlay}>{place.name}</div>
            </div>
            <div className={styles.content}>
                <p className={styles.description}>{place.description}</p>
                <div className={styles.tags}>
                    {placeTags.map(tag => (
                        <span key={tag.id} className={styles.tag}>
                            {tag.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;