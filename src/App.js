// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import plantData from './plant_data';
import PlantHeader from './Components/Header/PlantHeader';
import FooterButton from './Components/Footer/FooterButton';
import AboutContent from './Components/About/AboutContent';
import SearchContent from './Components/Search/SearchContent';
import PlantList from './Components/List/PlantList';
import type { PlantObject } from './plant_data';
import type { SearchQuery } from './SearchQuery';

// styled app container div
const AppContainer = styled.div`
  text-align: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-color: hsl(${props => props.theme.shipsOfficer});
  background-repeat: no-repeat;
`;

type Props = *;
type State = {
  searchResults: Array<PlantObject>,
  searchQuery: SearchQuery,
  searching: boolean
};

class App extends React.Component<Props, State> {
  state = {
    searchQuery: {
      leafTypes: {
        broadleaf: false,
        none: false,
        needles: false
      },
      shapes: {
        ovate: false,
        lanceolate: false,
        obovate: false,
        cordate: false,
        linear: false,
        needle: false
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
    searchResults: plantData,
    searching: true
  };

  toggleSearch = () => {
    this.setState(prevState => ({
      searching: !prevState.searching
    }));
  };

  handleSearchChange = (newQuery: SearchQuery) => {
    const { shapes, arrangements, forms, leafTypes } = newQuery;

    let leafTypesQ = Object.entries(leafTypes)
      .filter(leafType => leafType[1])
      .map(leafType => leafType[0]);
    if (leafTypesQ.length === 0) {
      leafTypesQ = Object.entries(leafTypes).map(leafType => leafType[0]);
    }

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
      let leafTypeResult = false;
      let shapeResult = false;
      let arrangementResult = false;
      let formResult = false;

      for (let i = 0; i < leafTypesQ.length; i++) {
        if (plant.lf_type === leafTypesQ[i]) leafTypeResult = true;
      }
      for (let i = 0; i < shapesQ.length; i++) {
        if (plant.lf_shape === shapesQ[i]) shapeResult = true;
      }
      for (let i = 0; i < arrangementsQ.length; i++) {
        if (plant.lf_arngmt === arrangementsQ[i]) arrangementResult = true;
      }
      for (let i = 0; i < formsQ.length; i++) {
        if (plant.form === formsQ[i]) formResult = true;
      }
      return leafTypeResult && shapeResult && arrangementResult && formResult;
    });

    this.setState(prevState => ({ ...prevState, searchResults: results }));
  };

  handleChange = (trait: string) => (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    const { searchQuery } = this.state;
    const { leafTypes, shapes, arrangements, forms } = searchQuery;
    const newQuery = { ...searchQuery };

    switch (trait) {
      case 'leafType':
        newQuery.leafTypes = { ...leafTypes, [name]: value };
        this.setState(
          prevState => ({
            ...prevState,
            searchQuery: newQuery
          }),
          this.handleSearchChange(newQuery)
        );
        break;

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
    const { searchResults, searchQuery, searching } = this.state;
    return (
      <AppContainer>
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
            {searching ? (
              <SearchContent onSearchChange={this.handleChange} searchQuery={searchQuery} />
            ) : (
              <PlantList searchResults={searchResults} key={searchResults.length} />
            )}
            <FooterButton onClick={this.toggleSearch}>
              {searching ? 'Show Results' : 'Return'}
            </FooterButton>
          </div>
        </div>
      </AppContainer>
    );
  }
}

export default App;
