// @flow
import type { PlantObject } from './plant_data';

type SearchQuery = {
  [string]: {
    [string]: boolean
  }
};

// return array of the names of true attributes
const getAttrQ = (attributeQueryObject: Object): Array<string> => {
  let result = Object.entries(attributeQueryObject)
    .filter(attr => attr[1])
    .map(attr => attr[0]);
  if (result.length === 0) {
    result = Object.entries(attributeQueryObject).map(attr => attr[0]);
  }
  return result;
};

// check if plant meets criteria for one attribute
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
  const attrNames = Object.keys(newQuery);

  const attrQs = Object.entries(newQuery).map(attr => getAttrQ(attr[1]));

  const hasAttrs = attrQs.map((attrQ, i) => (plant: PlantObject): boolean =>
    checkHasAttr(plant, attrNames[i], attrQ)
  );

  return plantData.filter(plant => {
    let result = true;
    hasAttrs.forEach(hasAttr => (!hasAttr(plant) ? (result = false) : undefined));
    return result;
  });
};

export default filterResults;
