import axios from 'axios';
import React, { Component } from 'react';
import styles from './App.scss';
import AppBar from './AppBar/AppBar';
import Product from './Product/Product';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wines: [],
            selectedWine: -1,
        };
    }

    componentDidMount() {
        // Get the list of wines
        axios.get(`${process.env.API_BASE_URL}wines/`).then((response) => {
            this.setState({ wines: response.data });
        });
    }

    changeWineHandler(updatedWine) {
        // Update the selected wine
        this.setState({ selectedWine: updatedWine });
    }

    render() {
        // Get the current state
        const { wines, selectedWine } = this.state;

        // Decide whether to show a message or the product
        let wineCard = <h1 className={styles.noWineSelected}>Please Select a Wine</h1>;
        // The wine id must not be -1 in order to show the product details
        if (selectedWine !== -1) {
            wineCard = (
                <div>
                    <Product wineId={selectedWine} />
                </div>
            );
        }

        return (
            <div className={styles.container}>
                <AppBar
                    wines={wines}
                    selectedWine={selectedWine}
                    selectWine={(wine) => this.changeWineHandler(wine)}
                />
                {wineCard}
            </div>
        );
    }
}

export default App;
