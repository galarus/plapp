// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import '../SearchContent.css';
import FormContent from './Form/FormContent';
import FormTitle from './Form/FormTitle';
import FormItem from './Form/FormItem';

type Forms = {
  grass: boolean,
  forb: boolean,
  tree: boolean,
  parasite: boolean
};
type Props = {
  forms: Forms,
  onSearchChange: *
};
type State = {
  show: boolean
};

class PlantForm extends React.Component<Props, State> {
  state = { show: false };

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { forms, onSearchChange } = this.props;
    const { show } = this.state;
    return (
      <div>
        <FormTitle onClick={this.toggleShow}>{show ? 'Form -' : 'Form +'}</FormTitle>
        <FormContent display={show}>
          <FormItem>
            <input name="grass" type="checkbox" checked={forms.grass} onChange={onSearchChange} />
            <b>
              <i> grass:</i>
            </b>
          </FormItem>
          <FormItem>
            <input name="forb" type="checkbox" checked={forms.forb} onChange={onSearchChange} />
            <b>
              <i> forb:</i>
            </b>
          </FormItem>
          <FormItem>
            <input name="tree" type="checkbox" checked={forms.tree} onChange={onSearchChange} />
            <b>
              <i> tree:</i>
            </b>
          </FormItem>
          <FormItem>
            <input
              name="parasite"
              type="checkbox"
              checked={forms.parasite}
              onChange={onSearchChange}
            />
            <b>
              <i> parasite:</i>
            </b>
          </FormItem>
        </FormContent>
      </div>
    );
  }
}

export default PlantForm;
