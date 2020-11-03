import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './NewReview.scss';

const newReview = () => (
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
        />
        <TextField
            id="outlined-textarea"
            label="Review"
            placeholder="Review"
            multiline
            variant="outlined"
        />
        <Button size="small" variant="contained" className={styles.Button} disabled>
            SUBMIT REVIEW
        </Button>
    </div>
);

export default newReview;
