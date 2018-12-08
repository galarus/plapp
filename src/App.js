// @flow
import * as React from 'react';
import './App.css';
import plantData from './plant_data';
import PlantHeader from './Components/Header/PlantHeader';
import PlantFooter from './Components/Footer/PlantFooter';
import AboutContent from './Components/About/AboutContent';
import SearchContent from './Components/Search/SearchContent';
import type { PlantObject } from './plant_data';

type Shapes = {
  ovate: boolean,
  lanceolate: boolean,
  obovate: boolean,
  cordate: boolean,
  linear: boolean
};
type Arrangements = {
  basal: boolean,
  whirled: boolean,
  alternate: boolean,
  opposite: boolean
};
type Forms = {
  grass: boolean,
  forb: boolean,
  tree: boolean,
  parasite: boolean
};
type SearchQuery = {
  forms: Forms,
  arrangements: Arrangements,
  shapes: Shapes
};

type Props = *;
type State = {
  searchResults: Array<PlantObject>,
  searchQuery: SearchQuery
};

class App extends React.Component<Props, State> {
  state = {
    searchQuery: {
      shapes: {
        ovate: false,
        lanceolate: false,
        obovate: false,
        cordate: false,
        linear: false
      },
      arrangements: {
        basal: false,
        whirled: false,
        alternate: false,
        opposite: false
      },
      forms: {
        grass: false,
        forb: false,
        tree: false,
        parasite: false
      }
    },
    searchResults: plantData
  };

  handleSearchChange = (newQuery: SearchQuery) => {
    const { shapes } = newQuery;
    const shapesQ = Object.entries(shapes)
      .filter(shape => shape[1])
      .map(shape => shape[0]);

    const results = plantData.filter(plant => {
      for (let i = 0; i < shapesQ.length; i++) {
        if (plant.lf_shape === shapesQ[i]) return true;
      }
      return false;
    });

    this.setState(prevState => ({ ...prevState, searchResults: results }));
  };

  handleChange = (trait: string) => (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    const { searchQuery } = this.state;
    const { shapes } = searchQuery;
    const newQuery = { ...searchQuery };

    switch (trait) {
      case 'shape':
        // console.log(`to handleChange: shapes: ${name} value: ${value}`);
        newQuery.shapes = { ...shapes, [name]: value };
        this.setState(
          prevState => ({
            ...prevState,
            searchQuery: newQuery
          }),
          this.handleSearchChange(newQuery)
        );
        break;

      case 'arrangement':
        this.setState(prevState => ({
          ...prevState,
          searchQuery: {
            ...prevState.searchQuery,

            arrangements: { ...prevState.searchQuery.arrangements, [name]: value }
          }
        }));
        break;
      case 'form':
        this.setState(prevState => ({
          ...prevState,
          searchQuery: {
            ...prevState.searchQuery,

            forms: { ...prevState.searchQuery.forms, [name]: value }
          }
        }));
        break;
      default:
        break;
    }
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
            <SearchContent onSearchChange={this.handleChange} searchQuery={searchQuery} />
          </div>
          <PlantFooter searchResults={searchResults} />
        </div>
      </div>
    );
  }
}

export default App;
