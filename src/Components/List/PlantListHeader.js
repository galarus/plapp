// @flow
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const ListHeaderContainer = styled.div`
  width: 90vw;
  display: flex;
  padding: 0em 2em 0em 0.1em;
  margin: 0.2em;
  justify-content: space-between;
  background-color: hsla(${props => props.theme.ming}, 0.9);
  color: hsla(${props => props.theme.gallery}, 1);

  div {
    width: 15em;
    margin: 0em;
    padding: 0.1em;
    line-height: 2em;
    font-size: 0.8em;
    border-left: 0.33em solid rgba(163, 42, 0, 0.1);
    :hover {
      cursor: pointer;
    }
  }
`;

type ItemProps = {
  title: string,
  toggleFunction: string => *
};

const ListHeaderItem = (props: ItemProps) => {
  const { title, toggleFunction } = props;
  return (
    <div role="button" tabIndex="0" onKeyDown={toggleFunction} onClick={toggleFunction}>
      {title}
    </div>
  );
};

type HeaderProps = {
  sortFunction: *
};

const PlantListHeader = (props: HeaderProps) => {
  const { sortFunction } = props;
  return (
    <ListHeaderContainer>
      <ListHeaderItem title="genus species" toggleFunction={sortFunction('plant_genus')} />
      <ListHeaderItem title="leaf shape" toggleFunction={sortFunction('lf_shape')} />
      <ListHeaderItem title="leaf arrangement" toggleFunction={sortFunction('lf_arngmt')} />
      <ListHeaderItem title="leaf form" toggleFunction={sortFunction('form')} />
      <ListHeaderItem title="leaf type" toggleFunction={sortFunction('lf_type')} />
      <ListHeaderItem title="leaf group" toggleFunction={sortFunction('lf_group')} />
      <ListHeaderItem title="habitat" toggleFunction={sortFunction('habitat')} />
      <ListHeaderItem title="petals" toggleFunction={sortFunction('petals')} />
    </ListHeaderContainer>
  );
};
export default PlantListHeader;
