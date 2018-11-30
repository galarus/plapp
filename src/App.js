// @flow
import * as React from 'react';
import './App.css';
import plantData from './plant_data';
import PlantHeader from './Components/Header/PlantHeader';
import PlantFooter from './Components/Footer/PlantFooter';
import AboutContent from './Components/About/AboutContent';
import SearchContent from './Components/Search/SearchContent';
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
        <div>
          <PlantHeader />
          <div
            style={{
              position: 'absolute',
              left: '10%',
              top: '10%'
            }}
          >
            <AboutContent />
            <SearchContent />
          </div>
          <PlantFooter
            searchResults={searchResults}
            searchQuery={searchQuery}
            onSearchChange={this.handleSearchChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
