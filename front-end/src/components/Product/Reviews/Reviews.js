import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styles from './Reviews.scss';

const reviews = ({ wineId, updateReview }) => {
    // State initialization for the list of reviews and average rating
    const [reviewsState, setReviewsState] = useState({
        reviews: [],
        averageRating: 0.0,
    });

    // When the wine id or the update review trigger is changed, get the list of reviews
    useEffect(() => {
        // Get Wine Reviews
        axios
            .get(`${process.env.API_BASE_URL}wines/${wineId}/ratings/`)
            .then((response) => {
                // Get the sum of the ratings
                const ratingSum = response.data.ratings.reduce(
                    (a, b) => a + (b.rating || 0),
                    0
                );
                // Find the average rating by dividing the sum by the total number of ratings
                const averageRating = (ratingSum / response.data.ratings.length).toFixed(
                    2
                );
                setReviewsState({
                    reviews: response.data.ratings,
                    averageRating,
                });
            });
    }, [wineId, updateReview]);

    return (
        <div>
            <h1 className={styles.Heading}>Reviews</h1>
            <h2 className={styles.AverageRating}>
                Average Rating:&nbsp;
                {reviewsState.averageRating}
            </h2>
            <ul className={styles.ReviewList}>
                {reviewsState.reviews.map((review) => (
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
reviews.defaultProps = {
    updateReview: true,
};
reviews.propTypes = {
    wineId: PropTypes.number.isRequired,
    updateReview: PropTypes.bool,
};

export default reviews;
