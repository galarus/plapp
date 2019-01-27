// @flow
import type { PlantObject } from './plant_data';
import type { SearchQuery } from './SearchQuery';

const getAttrQ = (attributeQueryObject: Object): Array<string> => {
  let result = Object.entries(attributeQueryObject)
    .filter(attr => attr[1])
    .map(attr => attr[0]);
  if (result.length === 0) {
    result = Object.entries(attributeQueryObject).map(attr => attr[0]);
  }
  return result;
};

const checkHasAttr = (plant: PlantObject, attr: string, attrQ: Array<string>): boolean => {
  for (let i = 0; i < attrQ.length; i++) {
    if (plant[attr] === attrQ[i]) return true;
  }
  return false;
};

const filterResults = (
  newQuery: SearchQuery,
  plantData: Array<PlantObject>
): Array<PlantObject> => {
  const { shapes, arrangements, forms, leafTypes, groups, habitats, petals } = newQuery;
  const leafTypesQ = getAttrQ(leafTypes);
  const leafShapesQ = getAttrQ(shapes);
  const arrangementsQ = getAttrQ(arrangements);
  const formsQ = getAttrQ(forms);
  const groupsQ = getAttrQ(groups);
  const habitatsQ = getAttrQ(habitats);
  const petalsQ = getAttrQ(petals);

  const hasLeafType = (plant: PlantObject): boolean => checkHasAttr(plant, 'lf_type', leafTypesQ);
  const hasLeafShape = (plant: PlantObject): boolean =>
    checkHasAttr(plant, 'lf_shape', leafShapesQ);
  const hasLeafArrangement = (plant: PlantObject): boolean =>
    checkHasAttr(plant, 'lf_arngmt', arrangementsQ);
  const hasForm = (plant: PlantObject): boolean => checkHasAttr(plant, 'form', formsQ);
  const hasLeafGroup = (plant: PlantObject): boolean => checkHasAttr(plant, 'lf_group', groupsQ);
  const hasHabitat = (plant: PlantObject): boolean => checkHasAttr(plant, 'habitat', habitatsQ);
  const hasPetals = (plant: PlantObject): boolean => checkHasAttr(plant, 'petals', petalsQ);

  return plantData.filter(
    plant =>
      hasLeafType(plant) &&
      hasLeafShape(plant) &&
      hasLeafArrangement(plant) &&
      hasForm(plant) &&
      hasLeafGroup(plant) &&
      hasHabitat(plant) &&
      hasPetals(plant)
  );
};

export default filterResults;
