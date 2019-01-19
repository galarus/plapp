// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

const FormItemForm = styled.form`
  flex: 1;
  min-width: 50%;
  height: auto;
  padding: 5px;

  @media (max-width: 777px) {
    width: 100%;
    margin: 0 0 0.5em 0;
  }
`;
type Props = {
  inputName: string,
  attribute: *,
  SvgItem: *,
  description: string,
  onSearchChange: *
};

function FormItem(props: Props) {
  const { attribute, inputName, SvgItem, description, onSearchChange } = props;
  const checked = attribute[inputName];
  return (
    <FormItemForm>
      <input name={inputName} type="checkbox" checked={checked} onChange={onSearchChange} />
      {<SvgItem.type style={{ transform: 'scale(3, 3)', margin: '0.5em 1em' }} />}
      <b>
        <i> {inputName}: </i>
      </b>
      {description}
    </FormItemForm>
  );
}

export default FormItem;
