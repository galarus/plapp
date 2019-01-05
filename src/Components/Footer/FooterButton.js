// @flow
import styled from '@emotion/styled';

const FooterButton = styled.div`
  text-align: center;
  font-weight: bold;
  /* center the div */
  margin: auto;
  /* give it dimensions */
  height: 13vh;
  line-height: 13vh;
  width: 25vw;
  background-color: hsla(${props => props.theme.sasquachSocks}, 1);
`;

export default FooterButton;
