import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Details from './Details/Details';
import Reviews from './Reviews/Reviews';
import NewReview from './NewReview/NewReview';
import styles from './Product.scss';

const product = ({ wineId }) => {
    const wine = {
        id: 1,
        name: 'Mojave Rain Merlot 2017',
        brand_id: 2,
        brand_name: 'Mojave Rain',
        varietal_id: 3,
        varietal_name: 'Merlot',
        description: 'lorem ipsum',
    };

    return (
        <div className={styles.Product}>
            <Paper className={styles.Paper}>
                <Details wine={wine} />
            </Paper>
            <Paper className={styles.Paper}>
                <Reviews wineId={wineId} />
            </Paper>
            <Paper className={styles.Paper}>
                <NewReview />
            </Paper>
        </div>
    );
};

product.propTypes = {
    wineId: PropTypes.number.isRequired,
};

export default product;
