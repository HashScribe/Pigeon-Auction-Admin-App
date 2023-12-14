const getUniqueValuesFromArray = <T>(items: T[]) => {
  const uniqueItemsSet = new Set(items);

  const uniqueItemsArray = Array.from(uniqueItemsSet);

  return uniqueItemsArray;
};

export { getUniqueValuesFromArray };
