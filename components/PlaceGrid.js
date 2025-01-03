'use client';

import { useState, useEffect } from 'react';
import Card from './Card';
import styles from '../styles/Grid.module.css';

const PlaceGrid = () => {
    const [places, setPlaces] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [placesRes, tagsRes] = await Promise.all([
                    fetch('/api/places'),
                    fetch('/api/tags')
                ]);

                if (!placesRes.ok || !tagsRes.ok) {
                    throw new Error('Failed to fetch data');
                }

                const placesData = await placesRes.json();
                const tagsData = await tagsRes.json();

                setPlaces(placesData);
                setTags(tagsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.grid}>
            {places.map(place => (
                <Card key={place.id} place={place} tags={tags} />
            ))}
        </div>
    );
};

export default PlaceGrid;