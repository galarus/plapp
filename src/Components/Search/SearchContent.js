// @flow
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { observer, inject } from 'mobx-react';

import SearchAttribute from './SearchAttribute/SearchAttribute';
import FormItem from './SearchAttribute/Form/FormItem';

const SearchContainer = styled.div`
  text-align: left;
  margin-left: 0em;
  width: 90vw;
  height: 67vh;
  overflow: auto;
  background-color: hsla(${props => props.theme.ebonyClay}, 0);
  color: hsl(${props => props.theme.gallery});
  display: ${props => props.show && 'none'};
`;

const SearchContent = inject('plantStore')(
  observer(({ plantStore, show }) => {
    const { searchQuery, handleQueryChange, attrItemsArray } = plantStore;

    const renderSearchAttribute = (attr: [string, *]) => {
      const attrName = attr[0];
      const { items, title } = (attr[1]: any);
      return (
        <SearchAttribute key={title} title={title}>
          {items.map(item => (
            <FormItem
              key={item.name}
              checked={searchQuery[attrName][item.name]}
              item={item}
              onSearchChange={handleQueryChange(attrName)}
            />
          ))}
        </SearchAttribute>
      );
    };

    return (
      <SearchContainer show={show}>
        {attrItemsArray.map(attr => renderSearchAttribute(attr))}
      </SearchContainer>
    );
  })
);

export default SearchContent;
