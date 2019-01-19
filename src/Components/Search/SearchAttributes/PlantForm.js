// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
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
        <FormContent display={show} />
      </div>
    );
  }
}

export default PlantForm;
