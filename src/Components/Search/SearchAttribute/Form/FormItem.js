// @flow
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import type { AttributeItem } from '../../../../Store/AttributeItems';

const FormItemForm = styled.form`
  flex: 1;
  min-width: 40%;
  height: auto;
  padding: 5px;

  @media (max-width: 777px) {
    width: 100%;
    margin: 0 0 0.5em 0;
  }
`;

type Props = {
  item: AttributeItem,
  onSearchChange: *,
  checked: boolean
};

function FormItem(props: Props) {
  const { onSearchChange, item, checked } = props;
  const { name, svg, description } = item;
  return (
    <FormItemForm>
      <input name={name} type="checkbox" checked={checked} onChange={onSearchChange} />
      {<svg.type style={{ transform: 'scale(3, 3)', margin: '0.5em 1em' }} />}
      <b>
        <i> {name}: </i>
      </b>
      {description}
    </FormItemForm>
  );
}

export default FormItem;
