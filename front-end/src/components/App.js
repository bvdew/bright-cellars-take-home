import React, { Component } from 'react';
import styles from './App.scss';
import AppBar from './AppBar/AppBar';
import Product from './Product/Product';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wines: [
                {
                    id: 1,
                    name: 'Mojave Rain Merlot 2017',
                },
                {
                    id: 2,
                    name: 'Mojave Rain Merlot 2018',
                },
            ],
            selectedWine: -1,
        };
    }

    changeWineHandler(updatedWine) {
        this.setState({ selectedWine: updatedWine });
    }

    render() {
        const { wines, selectedWine } = this.state;

        let wineCard = <h1 className={styles.noWineSelected}>Please Select a Wine</h1>;
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
