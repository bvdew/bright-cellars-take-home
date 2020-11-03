import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as colors from './constants/colors';
import './index.scss';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: colors.EDEN,
        },
    },
    overrides: {
        MuiSelect: {
            select: {
                color: colors.WHITE,
            },
            icon: {
                color: colors.WHITE,
            },
        },
        MuiInput: {
            underline: {
                '&:before': {
                    borderBottomColor: colors.WHITE,
                },
                '&:after': {
                    borderBottomColor: colors.WHITE,
                },
            },
        },
    },
});

const renderApp = () => {
    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>,
        document.getElementById('app')
    );
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./components/App', renderApp);
}

renderApp();
