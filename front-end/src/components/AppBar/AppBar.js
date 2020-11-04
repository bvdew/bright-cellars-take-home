import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './AppBar.scss';

// Set the style of the select field
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        fontSize: '0.875rem',
    },
}));

const appBar = ({ wines, selectedWine, selectWine }) => {
    // Get the styles for the select
    const classes = useStyles();

    // Update the selected wine when select value changes
    const handleChange = (event) => {
        selectWine(event.target.value);
    };

    return (
        <header className={styles.AppBar}>
            <FormControl className={classes.formControl}>
                <Select
                    className={classes.selectEmpty}
                    value={selectedWine}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Select Wine' }}
                    onChange={handleChange}
                >
                    <MenuItem key="0" value="-1">
                        None
                    </MenuItem>
                    {wines.map((wine) => (
                        <MenuItem key={wine.id} value={wine.id}>
                            {wine.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </header>
    );
};
appBar.defaultProps = {
    selectedWine: '-1',
};
appBar.propTypes = {
    wines: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedWine: PropTypes.number,
    selectWine: PropTypes.func.isRequired,
};

export default appBar;
