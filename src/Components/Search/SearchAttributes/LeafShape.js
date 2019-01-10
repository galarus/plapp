// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import '../SearchContent.css';
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
          <FormItem>
            <input name="ovate" type="checkbox" checked={shapes.ovate} onChange={onSearchChange} />
            <SvgShapeOvate style={{ transform: 'scale(2, 2)', margin: '0.5em 1em' }} />
            <b>
              <i>ovate: </i>
            </b>
            Oval, egg-shaped, with a tapering point and the widest portion near the petiole.
          </FormItem>
          <FormItem>
            <input
              name="lanceolate"
              type="checkbox"
              checked={shapes.lanceolate}
              onChange={onSearchChange}
            />
            <SvgShapeLanceolate style={{ transform: 'scale(2, 2)', margin: '0.5em 1em' }} />
            <b>
              <i> lanceolate: </i>
            </b>
            Long, wider in the middle, shaped like a lance tip.
          </FormItem>
          <FormItem>
            <input
              name="obovate"
              type="checkbox"
              checked={shapes.obovate}
              onChange={onSearchChange}
            />
            <SvgShapeObovate style={{ transform: 'scale(2, 2)', margin: '0.5em 1em' }} />
            <b>
              <i> obovate: </i>
            </b>
            Teardrop-shaped, stem attaches to the tapering end; reversed ovate.
          </FormItem>
          <FormItem>
            <input
              name="cordate"
              type="checkbox"
              checked={shapes.cordate}
              onChange={onSearchChange}
            />
            <SvgShapeCordate style={{ transform: 'scale(2, 2)', margin: '0.5em 1em' }} />
            <b>
              <i> cordate: </i>
            </b>
            Heart-shaped, with the petiole or stem attached to the notch.
          </FormItem>
          <FormItem>
            <input
              name="linear"
              type="checkbox"
              checked={shapes.linear}
              onChange={onSearchChange}
            />
            <SvgShapeLinear style={{ transform: 'scale(2, 2)', margin: '0.5em 1em' }} />
            <b>
              <i> linear: </i>
            </b>
            Long and very narrow like a blade of grass.
          </FormItem>
        </FormContent>
      </div>
    );
  }
}

export default LeafShape;
