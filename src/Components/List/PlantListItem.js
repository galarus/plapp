// @flow
/** @jsx jsx */
import styled from '@emotion/styled';

const PlantListItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 108, 57, 0);
  overflow: visible;
  width: 75vw;
  margin: 0.2em;
  padding: 0em 2em 0em 0.1em;
  border-radius: 0.3em;
  color: ${props => props.theme.fallingStar};

  div {
    width: 15em;
    margin: 0.3em;
    padding: 0.1em;
    text-align: center;
    line-height: 0.85em;
    font-size: 0.7em;
  }

  :nth-child(odd) {
    background-color: hsla(${props => props.theme.ebonyClay}, 0.8);
  }

  :nth-child(odd) > div {
    border: 1px;
    border-color: black;
  }
`;
export default PlantListItem;
