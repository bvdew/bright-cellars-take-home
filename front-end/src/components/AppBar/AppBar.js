import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './AppBar.scss';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 60,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
        fontSize: '0.9rem',
    },
}));

const appBar = ({ wines, selectedWine, selectWine }) => {
    const classes = useStyles();

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
    selectedWine: '',
};
appBar.propTypes = {
    wines: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedWine: PropTypes.number,
    selectWine: PropTypes.func.isRequired,
};

export default appBar;
