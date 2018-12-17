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
  opposite: boolean,
  none: boolean
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
        opposite: false,
        none: false
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
    const { shapes, arrangements, forms } = newQuery;

    let shapesQ = Object.entries(shapes)
      .filter(shape => shape[1])
      .map(shape => shape[0]);
    if (shapesQ.length === 0) {
      shapesQ = Object.entries(shapes).map(shape => shape[0]);
    }

    let arrangementsQ = Object.entries(arrangements)
      .filter(arrangement => arrangement[1])
      .map(arrangement => arrangement[0]);
    if (arrangementsQ.length === 0) {
      arrangementsQ = Object.entries(arrangements).map(arrangement => arrangement[0]);
    }

    let formsQ = Object.entries(forms)
      .filter(form => form[1])
      .map(form => form[0]);
    if (formsQ.length === 0) {
      formsQ = Object.entries(forms).map(form => form[0]);
    }

    const results = plantData.filter(plant => {
      let shapeResult = false;
      let arrangementResult = false;
      let formResult = false;

      for (let i = 0; i < shapesQ.length; i++) {
        if (plant.lf_shape === shapesQ[i]) shapeResult = true;
      }
      for (let i = 0; i < arrangementsQ.length; i++) {
        if (plant.lf_arngmt === arrangementsQ[i]) arrangementResult = true;
      }
      for (let i = 0; i < formsQ.length; i++) {
        if (plant.form === formsQ[i]) formResult = true;
      }
      return shapeResult && arrangementResult && formResult;
    });

    this.setState(prevState => ({ ...prevState, searchResults: results }));
  };

  handleChange = (trait: string) => (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    const { searchQuery } = this.state;
    const { shapes, arrangements, forms } = searchQuery;
    const newQuery = { ...searchQuery };

    switch (trait) {
      case 'shape':
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
        newQuery.arrangements = { ...arrangements, [name]: value };
        this.setState(
          prevState => ({
            ...prevState,
            searchQuery: newQuery
          }),
          this.handleSearchChange(newQuery)
        );
        break;

      case 'form':
        newQuery.forms = { ...forms, [name]: value };
        this.setState(
          prevState => ({
            ...prevState,
            searchQuery: newQuery
          }),
          this.handleSearchChange(newQuery)
        );
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
