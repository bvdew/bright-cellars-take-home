import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Details from './Details/Details';
import NewReview from './NewReview/NewReview';
import styles from './Product.scss';
import Reviews from './Reviews/Reviews';

const product = ({ wineId }) => {
    const [triggerState, setTrigger] = useState(false);

    const updateReviews = () => {
        setTrigger(!triggerState);
    };

    return (
        <div className={styles.Product}>
            <div className={styles.Wrapper}>
                <Paper className={styles.Paper}>
                    <Details wineId={wineId} />
                </Paper>
            </div>
            <div className={styles.Wrapper}>
                <Paper className={styles.Paper}>
                    <Reviews wineId={wineId} updateReview={triggerState} />
                </Paper>
            </div>
            <div className={styles.Wrapper}>
                <Paper className={styles.Paper}>
                    <NewReview wineId={wineId} updateReviews={updateReviews} />
                </Paper>
            </div>
        </div>
    );
};

product.propTypes = {
    wineId: PropTypes.number.isRequired,
};

export default product;
