// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import PlantHeader from './Components/Header/PlantHeader';
import FooterButton from './Components/Footer/FooterButton';
import AboutContent from './Components/About/AboutContent';
import SearchContent from './Components/Search/SearchContent';
import PlantList from './Components/List/PlantList';
import plantData from './plant_data';
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
      },
      groups: {
        none: false,
        simple: false,
        'compound palmate': false,
        'compound pinnate': false
      },
      habitats: {
        'mixed evergreen forest': false,
        'coastal prairie': false,
        grassland: false,
        'chronically wet areas': false,
        'redwood forest': false,
        disturbed: false
      },
      petals: {
        none: false,
        fused: false,
        three: false,
        five: false,
        six: false
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

  getAttrQ = (attributeQueryObject: Object): Array<string> => {
    let result = Object.entries(attributeQueryObject)
      .filter(attr => attr[1])
      .map(attr => attr[0]);
    if (result.length === 0) {
      result = Object.entries(attributeQueryObject).map(attr => attr[0]);
      result.map(i => console.log(i));
    }
    return result;
  };

  getAttrFilterResult = (plant: PlantObject, attr: string, attrQ: Array<string>): boolean => {
    for (let i = 0; i < attrQ.length; i++) {
      if (plant[attr] === attrQ[i]) return true;
    }
    return false;
  };

  handleSearchChange = (newQuery: SearchQuery) => {
    const { shapes, arrangements, forms, leafTypes, groups, habitats, petals } = newQuery;

    const leafTypesQ = this.getAttrQ(leafTypes);
    const shapesQ = this.getAttrQ(shapes);
    const arrangementsQ = this.getAttrQ(arrangements);
    const formsQ = this.getAttrQ(forms);
    const groupsQ = this.getAttrQ(groups);
    const habitatsQ = this.getAttrQ(habitats);
    const petalsQ = this.getAttrQ(petals);

    const results = plantData.filter(
      plant =>
        this.getAttrFilterResult(plant, 'lf_type', leafTypesQ) &&
        this.getAttrFilterResult(plant, 'lf_shape', shapesQ) &&
        this.getAttrFilterResult(plant, 'lf_arngmt', arrangementsQ) &&
        this.getAttrFilterResult(plant, 'form', formsQ) &&
        this.getAttrFilterResult(plant, 'lf_group', groupsQ) &&
        this.getAttrFilterResult(plant, 'habitat', habitatsQ) &&
        this.getAttrFilterResult(plant, 'petals', petalsQ)
    );

    this.setState(prevState => ({ ...prevState, searchResults: results }));
  };

  handleChange = (trait: string) => (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    const { searchQuery } = this.state;
    const { leafTypes, shapes, arrangements, forms, groups, habitats, petals } = searchQuery;
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
      case 'group':
        newQuery.groups = { ...groups, [name]: value };
        this.setState(
          prevState => ({
            ...prevState,
            searchQuery: newQuery
          }),
          this.handleSearchChange(newQuery)
        );
        break;

      case 'habitat':
        newQuery.habitats = { ...habitats, [name]: value };
        this.setState(
          prevState => ({
            ...prevState,
            searchQuery: newQuery
          }),
          this.handleSearchChange(newQuery)
        );
        break;

      case 'petals':
        newQuery.petals = { ...petals, [name]: value };
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
