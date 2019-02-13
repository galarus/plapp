// @flow
import * as React from 'react';
import SvgArrangementAlternate from '../Components/svg/arrangements/SvgArrangementAlternate';
import SvgArrangementOpposite from '../Components/svg/arrangements/SvgArrangementOpposite';
import SvgArrangementBasal from '../Components/svg/arrangements/SvgArrangementBasal';
import SvgArrangementWhirled from '../Components/svg/arrangements/SvgArrangementWhirled';
import SvgShapeCordate from '../Components/svg/shapes/SvgShapeCordate';
import SvgShapeLanceolate from '../Components/svg/shapes/SvgShapeLanceolate';
import SvgShapeLinear from '../Components/svg/shapes/SvgShapeLinear';
import SvgShapeObovate from '../Components/svg/shapes/SvgShapeObovate';
import SvgShapeOvate from '../Components/svg/shapes/SvgShapeOvate';

export type AttributeItem = {
  name: string,
  svg: *,
  description: string
};

export type Attribute = {
  title: string,
  items: Array<AttributeItem>
};

export type AttributeItems = {
  lf_arngmt: Attribute,
  lf_shape: Attribute,
  lf_type: Attribute,
  form: Attribute,
  lf_group: Attribute,
  habitat: Attribute,
  petals: Attribute
};

const attributeItems: AttributeItems = {
  lf_arngmt: {
    title: 'Leaf Arrangement',
    items: [
      {
        name: 'alternate',
        svg: <SvgArrangementAlternate />,
        description:
          'One leaf, branch, or flower part attaches at each point or node on the stem, and leaves  alternate direction, to a greater or lesser degree, along the stem.'
      },
      {
        name: 'opposite',
        svg: <SvgArrangementOpposite />,
        description:
          'Two leaves, branches, or flower parts attach at each point or node on the stem.'
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
    ]
  },
  lf_shape: {
    title: 'Leaf Shape',
    items: [
      {
        name: 'ovate',
        svg: <SvgShapeOvate />,
        description:
          'Oval, egg-shaped, with a tapering point and the widest portion near the petiole.'
      },
      {
        name: 'lanceolate',
        svg: <SvgShapeLanceolate />,
        description: 'Long, wider in the middle, shaped like a lance tip.'
      },
      {
        name: 'cordate',
        svg: <SvgShapeCordate />,
        description: 'Heart-shaped, with the petiole or stem attached to the notch.'
      },
      {
        name: 'obovate',
        svg: <SvgShapeObovate />,
        description: 'Teardrop-shaped, stem attaches to the tapering end; reversed ovate.'
      },
      {
        name: 'linear',
        svg: <SvgShapeLinear />,
        description: 'Long and very narrow like a blade of grass.'
      },
      {
        name: 'needle',
        svg: <span />,
        description: 'Long and very narrow like a blade of grass.'
      }
    ]
  },
  lf_type: {
    title: 'Leaf Type',
    items: [
      {
        name: 'broadleaf',
        svg: <span />,
        description: ' '
      },
      {
        name: 'needles',
        svg: <span />,
        description: ' '
      },
      {
        name: 'frond',
        svg: <span />,
        description: ' '
      },
      {
        name: 'none',
        svg: <span />,
        description: ' '
      }
    ]
  },
  form: {
    title: 'Form',
    items: [
      {
        name: 'grass',
        svg: <span />,
        description: ' '
      },
      {
        name: 'forb',
        svg: <span />,
        description: ' '
      },
      {
        name: 'tree',
        svg: <span />,
        description: ' '
      },
      {
        name: 'parasite',
        svg: <span />,
        description: ' '
      }
    ]
  },
  lf_group: {
    title: 'Leaf Group',
    items: [
      {
        name: 'simple',
        svg: <span />,
        description: ' '
      },
      {
        name: 'compound palmate',
        svg: <span />,
        description: ' '
      },
      {
        name: 'compound pinnate',
        svg: <span />,
        description: ' '
      },
      {
        name: 'none',
        svg: <span />,
        description: ' '
      }
    ]
  },
  habitat: {
    title: 'Habitat',
    items: [
      {
        name: 'mixed evergreen forest',
        svg: <span />,
        description: ' '
      },
      {
        name: 'coastal prairie',
        svg: <span />,
        description: ' '
      },
      {
        name: 'grassland',
        svg: <span />,
        description: ' '
      },
      {
        name: 'chronically wet areas',
        svg: <span />,
        description: ' '
      },
      {
        name: 'redwood forest',
        svg: <span />,
        description: ' '
      },
      {
        name: 'disturbed',
        svg: <span />,
        description: ' '
      }
    ]
  },
  petals: {
    title: 'Petals',
    items: [
      {
        name: 'none',
        svg: <span />,
        description: ' '
      },
      {
        name: 'fused',
        svg: <span />,
        description: ' '
      },
      {
        name: 'three',
        svg: <span />,
        description: ' '
      },
      {
        name: 'five',
        svg: <span />,
        description: ' '
      },
      {
        name: 'six',
        svg: <span />,
        description: ' '
      }
    ]
  }
};

export default attributeItems;