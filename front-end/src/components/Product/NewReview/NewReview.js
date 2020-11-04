import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './NewReview.scss';

const newReview = ({ wineId, updateReviews }) => {
    const [ratingState, setRating] = useState({
        rating: 3,
    });
    const [reviewState, setReview] = useState({
        review: '',
    });

    // POST review
    const postDataHandler = () => {
        const review = {
            rating: ratingState.rating,
            review: reviewState.review,
        };
        axios
            .post(`http://localhost:3000/wines/${wineId}/ratings/`, review)
            .then(() => updateReviews());
    };

    // Update the rating state
    const ratingChangeHandler = (event, newValue) => {
        setRating({
            rating: newValue,
        });
    };

    // Update the review state
    const reviewChangeHandler = (event) => {
        setReview({
            review: event.target.value,
        });
    };

    return (
        <div>
            <h1 className={styles.Heading}>New Review</h1>
            <Typography id="discrete-slider" variant="body2" gutterBottom>
                Rating
            </Typography>
            <Slider
                defaultValue={3}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                min={1}
                max={5}
                onChange={ratingChangeHandler}
            />
            <TextField
                id="outlined-textarea"
                label="Review"
                placeholder="Review"
                multiline
                variant="outlined"
                onChange={reviewChangeHandler}
                inputProps={{ style: { fontSize: 14 } }}
            />
            <div className={styles.Button}>
                <Button
                    size="small"
                    variant="contained"
                    disabled={reviewState.review === ''}
                    onClick={postDataHandler}
                >
                    SUBMIT REVIEW
                </Button>
            </div>
        </div>
    );
};

newReview.propTypes = {
    wineId: PropTypes.number.isRequired,
    updateReviews: PropTypes.func.isRequired,
};

export default newReview;
