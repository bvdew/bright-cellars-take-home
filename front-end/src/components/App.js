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
        axios.get('http://localhost:3000/wines/').then((response) => {
            this.setState({ wines: response.data });
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { selectedWine } = this.state;
        if (nextState.selectedWine !== selectedWine) {
            return true;
        }
        console.log('No Update');
        return false;
    }

    changeWineHandler(updatedWine) {
        this.setState({ selectedWine: updatedWine });
    }

    render() {
        const { wines, selectedWine } = this.state;

        let wineCard = <h1 className={styles.noWineSelected}>Please Select a Wine</h1>;
        console.log(selectedWine);
        if (selectedWine !== -1) {
            console.log('Load the product', selectedWine);
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
