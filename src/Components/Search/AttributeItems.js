// @flow
import * as React from 'react';
import SvgArrangementAlternate from '../svg/arrangements/SvgArrangementAlternate';
import SvgArrangementOpposite from '../svg/arrangements/SvgArrangementOpposite';
import SvgArrangementBasal from '../svg/arrangements/SvgArrangementBasal';
import SvgArrangementWhirled from '../svg/arrangements/SvgArrangementWhirled';
import SvgShapeCordate from '../svg/shapes/SvgShapeCordate';
import SvgShapeLanceolate from '../svg/shapes/SvgShapeLanceolate';
import SvgShapeLinear from '../svg/shapes/SvgShapeLinear';
import SvgShapeObovate from '../svg/shapes/SvgShapeObovate';
import SvgShapeOvate from '../svg/shapes/SvgShapeOvate';

export type AttributeItem = {
  name: string,
  svg: *,
  description: string
};

type ArrangementItems = {
  leafArrangementItems: Array<AttributeItem>,
  leafShapeItems: Array<AttributeItem>,
  leafTypeItems: Array<AttributeItem>,
  plantFormItems: Array<AttributeItem>
};

const arrangementItems: ArrangementItems = {
  leafArrangementItems: [
    {
      name: 'alternate',
      svg: <SvgArrangementAlternate />,
      description:
        'One leaf, branch, or flower part attaches at each point or node on the stem, and leaves  alternate direction, to a greater or lesser degree, along the stem.'
    },
    {
      name: 'opposite',
      svg: <SvgArrangementOpposite />,
      description: 'Two leaves, branches, or flower parts attach at each point or node on the stem.'
    },
    {
      name: 'whirled',
      svg: <SvgArrangementWhirled />,
      description:
        'Three or more leaves, branches, or flower parts attach at each point or node on the stem.'
    },
    {
      name: 'basal',
      svg: <SvgArrangementBasal />,
      description: 'Arising from the base of the stem.'
    },
    {
      name: 'none',
      svg: <span />,
      description: ''
    }
  ],
  leafShapeItems: [
    {
      name: 'cordate',
      svg: <SvgShapeCordate />,
      description: 'Heart-shaped, with the petiole or stem attached to the notch.'
    }
  ],
  leafTypeItems: [
    {
      name: 'broadleaf',
      svg: <span />,
      description: ' '
    }
  ],
  plantFormItems: [
    {
      name: 'grass',
      svg: <span />,
      description: ' '
    }
  ]
};
export default arrangementItems;
