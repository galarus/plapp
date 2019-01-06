import styled from '@emotion/styled';

const FormItem = styled.form`
  flex: 1;
  min-width: 50%;
  height: auto;
  padding: 5px;

  @media (max-width: 777px) {
    width: 100%;
    margin: 0 0 0.5em 0;
  }
`;

export default FormItem;
