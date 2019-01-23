// @flow
import { observable, computed, action } from 'mobx';

import plantData from './plant_data';
import SearchUtils from './SearchUtils';
import type { PlantObject } from './plant_data';
import type { SearchQuery } from './SearchQuery';

class PlantStore {
  @observable searching: boolean = true;

  @observable searchQuery: SearchQuery = {
    leafTypes: {
      broadleaf: false,
      none: false,
      needles: false
    },
    shapes: {
      ovate: false,
      lanceolate: false,
      obovate: false,
      cordate: false,
      linear: false,
      needle: false
    },
    arrangements: {
      basal: false,
      whirled: false,
      alternate: false,
      opposite: false,
      none: false
    },
    forms: {
      grass: false,
      forb: false,
      tree: false,
      parasite: false
    },
    groups: {
      none: false,
      simple: false,
      'compound palmate': false,
      'compound pinnate': false
    },
    habitats: {
      'mixed evergreen forest': false,
      'coastal prairie': false,
      grassland: false,
      'chronically wet areas': false,
      'redwood forest': false,
      disturbed: false
    },
    petals: {
      none: false,
      fused: false,
      three: false,
      five: false,
      six: false
    }
  };

  utils = new SearchUtils();

  @computed get searchResults(): Array<PlantObject> {
    return this.utils.filterResults(this.searchQuery, plantData);
  }

  @action.bound
  toggleSearch() {
    this.searching = !this.searching;
  }

  @action.bound
  handleQueryChange = (trait: string) => (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    switch (trait) {
      case 'leafType':
        this.searchQuery.leafTypes = { ...this.searchQuery.leafTypes, [name]: value };
        break;
      case 'shape':
        this.searchQuery.shapes = { ...this.searchQuery.shapes, [name]: value };
        break;
      case 'arrangement':
        this.searchQuery.arrangements = { ...this.searchQuery.arrangements, [name]: value };
        break;
      case 'form':
        this.searchQuery.forms = { ...this.searchQuery.forms, [name]: value };
        break;
      case 'group':
        this.searchQuery.groups = { ...this.searchQuery.groups, [name]: value };
        break;
      case 'habitat':
        this.searchQuery.habitats = { ...this.searchQuery.habitats, [name]: value };
        break;
      case 'petals':
        this.searchQuery.petals = { ...this.searchQuery.petals, [name]: value };
        break;
      default:
        break;
    }
  };
}

export default PlantStore;
