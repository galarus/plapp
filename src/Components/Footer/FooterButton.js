// @flow
import styled from '@emotion/styled';

const FooterButton = styled.div`
  position: fixed;
  text-align: center;
  font-weight: bold;
  /* center the div */
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  /* give it dimensions */
  height: 5em;
  line-height: 5em;
  width: 20em;
  bottom: 1.5em;
  background-color: hsla(${props => props.theme.sasquachSocks}, 1);
`;

export default FooterButton;
