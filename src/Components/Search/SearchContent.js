// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import SearchAttribute from './SearchAttribute/SearchAttribute';
import FormItem from './SearchAttribute/Form/FormItem';
import type { SearchQuery } from '../../SearchQuery';

import attributeItems from './AttributeItems';

const SearchContainer = styled.div`
  text-align: left;
  margin-left: 0.2em;
  width: 75vw;
  height: 67vh;
  overflow: auto;
  background-color: hsla(${props => props.theme.ebonyClay}, 0);
  color: hsl(${props => props.theme.gallery});
`;

type Props = {
  searchQuery: SearchQuery,
  onSearchChange: *
};
function SearchContent(props: Props) {
  const { searchQuery, onSearchChange } = props;
  const { leafTypes, shapes, forms, arrangements } = searchQuery;
  const { leafArrangementItems, leafShapeItems, leafTypeItems, plantFormItems } = attributeItems;
  return (
    <SearchContainer>
      <SearchAttribute title="Leaf Arrangement">
        {leafArrangementItems.map(item => (
          <FormItem
            key={item.name}
            attribute={arrangements}
            inputName={item.name}
            SvgItem={item.svg}
            description={item.description}
            onSearchChange={onSearchChange('arrangement')}
          />
        ))}
      </SearchAttribute>
      <SearchAttribute title="Leaf Shape">
        {leafShapeItems.map(item => (
          <FormItem
            key={item.name}
            attribute={shapes}
            inputName={item.name}
            SvgItem={item.svg}
            description={item.description}
            onSearchChange={onSearchChange('shape')}
          />
        ))}
      </SearchAttribute>
      <SearchAttribute title="Leaf Type">
        {leafTypeItems.map(item => (
          <FormItem
            key={item.name}
            attribute={leafTypes}
            inputName={item.name}
            SvgItem={item.svg}
            description={item.description}
            onSearchChange={onSearchChange('leafType')}
          />
        ))}
      </SearchAttribute>
      <SearchAttribute title="Form">
        {plantFormItems.map(item => (
          <FormItem
            key={item.name}
            attribute={forms}
            inputName={item.name}
            SvgItem={item.svg}
            description={item.description}
            onSearchChange={onSearchChange('form')}
          />
        ))}
      </SearchAttribute>
    </SearchContainer>
  );
}

export default SearchContent;
