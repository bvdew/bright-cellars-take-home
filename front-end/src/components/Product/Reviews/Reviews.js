import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reviews.scss';

const reviews = ({ wineId }) => {
    const wineReviews = [
        {
            id: 43,
            rating: 1,
            review: 'I love this wine',
        },
        {
            id: 93,
            rating: 5,
            review: 'Very good.',
        },
        {
            id: 128,
            rating: 4,
            review: '',
        },
    ];

    const ratingSum = wineReviews.reduce((a, b) => a + (b.rating || 0), 0);
    const averageRating = (ratingSum / wineReviews.length).toFixed(2);

    return (
        <div>
            <h1 className={styles.Heading}>
                Reviews for
                {wineId}
            </h1>
            <h2 className={styles.AverageRating}>
                Average Rating:&nbsp;
                {averageRating}
            </h2>
            <ul className={styles.ReviewList}>
                {wineReviews.map((review) => (
                    <li key={review.id} className={styles.Review}>
                        <p className={styles.Rating}>
                            Rating:&nbsp;
                            {review.rating}
                        </p>
                        <p className={styles.Text}>{review.review}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

reviews.propTypes = {
    wineId: PropTypes.number.isRequired,
};

export default reviews;
