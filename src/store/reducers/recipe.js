const initialState = {
  recipe: [],
  myRecipe: {},
  isLoading: false,
  // isSuccess: false,
  isError: false,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    // get latest recipe
    case 'GET_LATEST_RECIPES_PENDING':
      return { ...state, isLoading: true };
    case 'GET_LATEST_RECIPES_FULFILLED':
      return { ...state, isLoading: false, recipe: action.payload.data };
    case 'GET_LATEST_RECIPES_REJECTED':
      return { ...state, isLoading: false, isError: true };

    // create recipe
    case 'CREATE_RECIPES_PENDING':
      return { ...state, isLoading: true, isError: null };
    case 'CREATE_RECIPES_FULFILLED':
      return { ...state, isLoading: false, isError: null };
    case 'CREATE_RECIPES_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };

    // get detail recipe
    case 'GET_DETAIL_RECIPES_PENDING':
      return { ...state, isLoading: true };
    case 'GET_DETAIL_RECIPES_FULFILLED':
      return { ...state, isLoading: false, recipe: action.payload.data };
    case 'GET_DETAIL_RECIPES_REJECTED':
      return { ...state, isLoading: false, isError: true };

    // get my recipe
    case 'GET_MY_RECIPES_PENDING':
      return { ...state, isLoading: true };
    case 'GET_MY_RECIPES_FULFILLED':
      return { ...state, isLoading: false, recipe: action.payload.data };
    case 'GET_MY_RECIPES_REJECTED':
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default recipeReducer;
