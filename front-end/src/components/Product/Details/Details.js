import PropTypes from 'prop-types';
import React from 'react';
import productImage from '../../../assets/wines/folk-and-fable.png';
import styles from './Details.scss';

const details = ({ wine }) => (
    <div>
        <div
            className={styles.ImageWrapper}
            style={{ backgroundImage: `url(${productImage})` }}
        />
        <h1 className={styles.Title}>{wine.name}</h1>
        <h2 className={styles.Subtitle}>
            {wine.brand_name}
            &nbsp;&ndash;&nbsp;
            {wine.varietal_name}
        </h2>
        <p className={styles.Description}>{wine.description}</p>
        <p className={styles.Tags}>Tags: Lemon, Nutty, Honey</p>
    </div>
);

details.propTypes = {
    wine: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default details;
