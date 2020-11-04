import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Details from './Details/Details';
import NewReview from './NewReview/NewReview';
import styles from './Product.scss';
import Reviews from './Reviews/Reviews';

const product = ({ wineId }) => {
    // triggerState is used to tell the component to update the reviews when a new review is posted
    const [triggerState, setTrigger] = useState(false);

    // A new review was posted, so trigger the reviews
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
