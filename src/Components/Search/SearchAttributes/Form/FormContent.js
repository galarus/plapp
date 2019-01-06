import styled from '@emotion/styled';

const FormContent = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: hsla(${props => props.theme.ebonyClay}, 0.5);
`;

export default FormContent;
