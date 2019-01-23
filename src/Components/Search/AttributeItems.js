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

type AttributeItems = {
  leafArrangementItems: Array<AttributeItem>,
  leafShapeItems: Array<AttributeItem>,
  leafTypeItems: Array<AttributeItem>,
  plantFormItems: Array<AttributeItem>,
  leafGroupItems: Array<AttributeItem>,
  plantHabitatItems: Array<AttributeItem>,
  plantPetalsItems: Array<AttributeItem>
};

const attributeItems: AttributeItems = {
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
  ],
  leafTypeItems: [
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
  ],
  plantFormItems: [
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
  ],
  leafGroupItems: [
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
  ],
  plantHabitatItems: [
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
  ],
  plantPetalsItems: [
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
};

export default attributeItems;
