import styled from '@emotion/styled';

const FormContent = styled.form`
  width: 100%;
  display: ${props => (props.display ? 'flex' : 'none')};
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: hsla(${props => props.theme.ebonyClay}, 0.5);

  @media (max-width: 777px) {
    display: ${props => (props.display ? 'block' : 'none')};
  }
`;

export default FormContent;
