type LeafTypes = {
  broadleaf: boolean,
  none: boolean,
  needles: boolean
};
type Shapes = {
  ovate: boolean,
  lanceolate: boolean,
  obovate: boolean,
  cordate: boolean,
  linear: boolean,
  needle: boolean
};
type Arrangements = {
  basal: boolean,
  whirled: boolean,
  alternate: boolean,
  opposite: boolean,
  none: boolean
};
type Forms = {
  grass: boolean,
  forb: boolean,
  tree: boolean,
  parasite: boolean
};

type Groups = {
  none: boolean,
  simple: boolean,
  'compound palmate': boolean,
  'compound pinnate': boolean
};

type Habitats = {
  'mixed evergreen forest': boolean,
  'coastal prairie': boolean,
  grassland: boolean,
  'chronically wet areas': boolean,
  'redwood forest': boolean,
  disturbed: boolean
};

type Petals = {
  none: boolean,
  fused: boolean,
  three: boolean,
  five: boolean,
  six: boolean
};

export type SearchQuery = {
  forms: Forms,
  arrangements: Arrangements,
  shapes: Shapes,
  leafTypes: LeafTypes,
  groups: Groups,
  habitats: Habitats,
  petals: Petals
};
