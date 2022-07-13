const initialState = {
  List: [],
};

export const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        data: [...state.List, { id: id, data: data }],
      };

    default:
      return state;
  }
};
