// @flow
import * as React from 'react';
import './App.css';
import PlantHeader from './Header/PlantHeader';
import PlantFooter from './Footer/PlantFooter';
import plantData from './plant_data';
import AboutBtn from './svg/AboutBtn';

import type { PlantObject } from './plant_data';

type SearchQuery = {
  jepson_range: Array<?string>,
  genus: string,
  species: string
};

type Props = *;
type State = {
  searchResults: Array<PlantObject>,
  searchQuery: SearchQuery
};

class App extends React.Component<Props, State> {
  state = {
    searchQuery: {
      jepson_range: ['', ''],
      genus: '',
      species: ''
    },
    searchResults: plantData
  };

  handleSearchChange = (searchQuery: SearchQuery) => {
    const min = Number(searchQuery.jepson_range[0]);
    const max = isNaN(parseInt(searchQuery.jepson_range[1], 10))
      ? Number.MAX_SAFE_INTEGER
      : Number(searchQuery.jepson_range[1]);
    const genus = searchQuery.genus.toLowerCase();
    const species = searchQuery.species.toLowerCase();
    console.log(`genus ${searchQuery.genus}`);
    console.log(`species ${searchQuery.species}`);

    const results = plantData.filter(
      plant =>
        plant.jepson_code >= min &&
        plant.jepson_code <= max &&
        plant.plant_genus.includes(genus) &&
        plant.plant_species.includes(species)
    );
    // first filter jepson code range min then max
    console.log(`handle find change from app component ${searchQuery}`);
    this.setState({ searchQuery, searchResults: results });
  };

  render() {
    const { searchResults, searchQuery } = this.state;
    return (
      <div className="App">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '100vw',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <PlantHeader />
          <div
            style={{
              margin: '1.5em 1em',
              overflow: 'auto',
              height: '350vh',
              width: '80vw'
            }}
          />
          <PlantFooter
            searchResults={searchResults}
            searchQuery={searchQuery}
            onSearchChange={this.handleSearchChange}
          />
        </div>
        <AboutBtn />
      </div>
    );
  }
}

export default App;
