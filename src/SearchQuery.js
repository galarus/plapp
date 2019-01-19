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
export type SearchQuery = {
  forms: Forms,
  arrangements: Arrangements,
  shapes: Shapes,
  leafTypes: LeafTypes
};
