// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import SvgShapeCordate from '../../svg/shapes/SvgShapeCordate';
import SvgShapeLanceolate from '../../svg/shapes/SvgShapeLanceolate';
import SvgShapeLinear from '../../svg/shapes/SvgShapeLinear';
import SvgShapeObovate from '../../svg/shapes/SvgShapeObovate';
import SvgShapeOvate from '../../svg/shapes/SvgShapeOvate';

import FormContent from './Form/FormContent';
import FormTitle from './Form/FormTitle';
import FormItem from './Form/FormItem';

type Shapes = {
  ovate: boolean,
  lanceolate: boolean,
  obovate: boolean,
  cordate: boolean,
  linear: boolean
};

type Props = {
  shapes: Shapes,
  onSearchChange: *
};
type State = {
  show: boolean
};

class LeafShape extends React.Component<Props, State> {
  state = { show: false };

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { shapes, onSearchChange } = this.props;
    const { show } = this.state;
    return (
      <div>
        <FormTitle onClick={this.toggleShow}>{show ? 'Leaf Shape -' : 'Leaf Shape +'}</FormTitle>
        <FormContent display={show}>
          <FormItem
            attribute={shapes}
            inputName="cordate"
            SvgItem={<SvgShapeCordate />}
            description="Heart-shaped, with the petiole or stem attached to the notch."
            onSearchChange={onSearchChange}
          />
        </FormContent>
      </div>
    );
  }
}

export default LeafShape;
