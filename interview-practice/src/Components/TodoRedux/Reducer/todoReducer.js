const initialState = {
  List: [],
};

export const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      console.log(id, data);
      return {
        ...state,
        List: [...state.List, { id: id, data: data }],
      };
    case "DELETE_TODO":
      const newlist = state.List.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        List: newlist,
      };
    case "REMOVE_TODO":
      return {
        List: [],
      };

    default:
      return state;
  }
};
