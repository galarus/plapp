// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import LeafShape from './SearchAttributes/LeafShape';
import LeafArrangement from './SearchAttributes/LeafArrangement';
import PlantForm from './SearchAttributes/PlantForm';
import LeafType from './SearchAttributes/LeafType';

import type { SearchQuery } from '../../SearchQuery';

type Props = {
  searchQuery: SearchQuery,
  onSearchChange: *
};

const SearchContainer = styled.div`
  text-align: left;
  margin-left: 0.2em;
  width: 75vw;
  height: 67vh;
  overflow: auto;
  background-color: hsla(${props => props.theme.ebonyClay}, 0);
  color: hsl(${props => props.theme.gallery});
`;

function SearchContent(props: Props) {
  const { searchQuery, onSearchChange } = props;
  const { leafTypes, shapes, forms, arrangements } = searchQuery;
  return (
    <SearchContainer>
      <LeafArrangement arrangements={arrangements} onSearchChange={onSearchChange('arrangement')} />
      <LeafShape shapes={shapes} onSearchChange={onSearchChange('shape')} />
      <LeafType leafTypes={leafTypes} onSearchChange={onSearchChange('leafType')} />
      <PlantForm forms={forms} onSearchChange={onSearchChange('form')} />
    </SearchContainer>
  );
}

export default SearchContent;
