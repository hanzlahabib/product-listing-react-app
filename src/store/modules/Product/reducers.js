const initialState = JSON.parse(window.localStorage.getItem('products')) || [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      state = [...state, action.payload];
      window.localStorage.setItem('products', JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
