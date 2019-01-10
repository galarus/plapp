// @flow
/** @jsx jsx */
import styled from '@emotion/styled';

const PlantListHeader = styled.div`
  width: 75vw;
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
export default PlantListHeader;
