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

  handleSearchChange = () => {
    const { searchQuery } = this.state;
    const { shapes } = searchQuery;

    const results = plantData.filter(
      plant =>
        (shapes.ovate && plant.lf_shape === 'ovate') ||
        (shapes.lanceolate && plant.lf_shape === 'lanceolate') ||
        (shapes.obovate && plant.lf_shape === 'obovate') ||
        (shapes.cordate && plant.lf_shape === 'cordate') ||
        (shapes.linear && plant.lf_shape === 'linear')
    );
    console.log(`handle find change from app component ${shapes.ovate}`);
    this.setState(prevState => ({ ...prevState, searchResults: results }));
  };

  handleChange = (trait: string) => (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    switch (trait) {
      case 'shape':
        this.setState(
          prevState => ({
            ...prevState,
            searchQuery: {
              ...prevState.searchQuery,
              shapes: { ...prevState.searchQuery.shapes, [name]: value }
            }
          }),
          this.handleSearchChange()
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
