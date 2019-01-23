// @flow
import type { PlantObject } from './plant_data';
import type { SearchQuery } from './SearchQuery';

class SearchUtils {
  getAttrQ = (attributeQueryObject: Object): Array<string> => {
    let result = Object.entries(attributeQueryObject)
      .filter(attr => attr[1])
      .map(attr => attr[0]);
    if (result.length === 0) {
      result = Object.entries(attributeQueryObject).map(attr => attr[0]);
      result.map(i => console.log(i));
    }
    return result;
  };

  getAttrFilterResult = (plant: PlantObject, attr: string, attrQ: Array<string>): boolean => {
    for (let i = 0; i < attrQ.length; i++) {
      if (plant[attr] === attrQ[i]) return true;
    }
    return false;
  };

  filterResults = (newQuery: SearchQuery, plantData: Array<PlantObject>): Array<PlantObject> => {
    const { shapes, arrangements, forms, leafTypes, groups, habitats, petals } = newQuery;
    const leafTypesQ = this.getAttrQ(leafTypes);
    const shapesQ = this.getAttrQ(shapes);
    const arrangementsQ = this.getAttrQ(arrangements);
    const formsQ = this.getAttrQ(forms);
    const groupsQ = this.getAttrQ(groups);
    const habitatsQ = this.getAttrQ(habitats);
    const petalsQ = this.getAttrQ(petals);

    return plantData.filter(
      plant =>
        this.getAttrFilterResult(plant, 'lf_type', leafTypesQ) &&
        this.getAttrFilterResult(plant, 'lf_shape', shapesQ) &&
        this.getAttrFilterResult(plant, 'lf_arngmt', arrangementsQ) &&
        this.getAttrFilterResult(plant, 'form', formsQ) &&
        this.getAttrFilterResult(plant, 'lf_group', groupsQ) &&
        this.getAttrFilterResult(plant, 'habitat', habitatsQ) &&
        this.getAttrFilterResult(plant, 'petals', petalsQ)
    );
  };
}
export default SearchUtils;
