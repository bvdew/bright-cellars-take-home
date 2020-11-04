import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import productImage from '../../../assets/wines/folk-and-fable.png';
import styles from './Details.scss';

const details = ({ wineId }) => {
    const [wineState, setWineState] = useState({
        wine: {},
    });
    const [tagsState, setTagsState] = useState({
        tags: '',
    });

    useEffect(() => {
        // Get Wine Details
        axios.get(`http://localhost:3000/wines/${wineId}/`).then((response) => {
            setWineState({
                wine: response.data,
            });
        });
        // Get Tag Names
        axios
            .get(`http://localhost:3000/wines/${wineId}/taste_tags/`)
            .then((response) => {
                const tags = response.data.taste_tags.map((tag) => tag.name).join(', ');
                setTagsState({
                    tags,
                });
            });
    }, [wineId]);

    return (
        <div>
            <div
                className={styles.ImageWrapper}
                style={{ backgroundImage: `url(${productImage})` }}
            />
            <h1 className={styles.Title}>{wineState.wine.name}</h1>
            <h2 className={styles.Subtitle}>
                {wineState.wine.brand_name}
                &nbsp;&ndash;&nbsp;
                {wineState.wine.varietal_name}
            </h2>
            <p className={styles.Description}>{wineState.wine.description}</p>
            <p className={styles.Tags}>
                Tags:&nbsp;
                {tagsState.tags}
            </p>
        </div>
    );
};

details.propTypes = {
    wineId: PropTypes.number.isRequired,
};

export default details;
