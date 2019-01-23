// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { observer, inject } from 'mobx-react';
import PlantHeader from './Components/Header/PlantHeader';
import FooterButton from './Components/Footer/FooterButton';
import AboutContent from './Components/About/AboutContent';
import SearchContent from './Components/Search/SearchContent';
import PlantList from './Components/List/PlantList';

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

const AppBody = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
`;

@inject('plantStore')
@observer
class App extends React.Component {
  render() {
    const { searchResults, searching, toggleSearch } = this.props.plantStore;
    return (
      <AppContainer>
        <PlantHeader />

        <AppBody>
          <AboutContent />

          <SearchContent show={!searching} />
          <PlantList show={searching} searchResults={searchResults} />
          <FooterButton onClick={toggleSearch}>
            {searching ? 'Show Results' : 'Return'}
          </FooterButton>
        </AppBody>
      </AppContainer>
    );
  }
}

export default App;
