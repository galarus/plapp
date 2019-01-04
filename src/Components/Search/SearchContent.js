// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import LeafShape from './SearchAttributes/LeafShape';
import LeafArrangement from './SearchAttributes/LeafArrangement';
import PlantForm from './SearchAttributes/PlantForm';

type Forms = {
  grass: boolean,
  forb: boolean,
  tree: boolean,
  parasite: boolean
};
type Arrangements = {
  basal: boolean,
  whirled: boolean,
  alternate: boolean,
  opposite: boolean,
  none: boolean
};

type Shapes = {
  ovate: boolean,
  lanceolate: boolean,
  obovate: boolean,
  cordate: boolean,
  linear: boolean
};

type SearchQuery = {
  forms: Forms,
  arrangements: Arrangements,
  shapes: Shapes
};
type Props = {
  searchQuery: SearchQuery,
  onSearchChange: *
};

const SearchContainer = styled.div`
  text-align: left;
  margin-left: 1vw;
  margin-right: 10em;
  margin-top: 1em;
  width: 80vw;
  height: 65vh;
  overflow: auto;
  padding: 0.2em 2em 2em 2em;
  background-color: hsla(${props => props.theme.ebonyClay}, 0);
  color: hsl(${props => props.theme.gallery});
  border-width: 1px;
`;

function SearchContent(props: Props) {
  const { searchQuery, onSearchChange } = props;
  const { shapes, forms, arrangements } = searchQuery;
  return (
    <SearchContainer>
      <LeafShape shapes={shapes} onSearchChange={onSearchChange('shapes')} />
      <LeafArrangement arrangements={arrangements} onSearchChange={onSearchChange('arrangement')} />
      <PlantForm forms={forms} onSearchChange={onSearchChange('form')} />
    </SearchContainer>
  );
}

export default SearchContent;
