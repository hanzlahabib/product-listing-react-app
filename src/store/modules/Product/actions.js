export const addProduct = (product) => {
  const action = { type: 'ADD_PRODUCT', payload: product };

  return action;
};
