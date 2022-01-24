// const INITIAL_STATE = [];
// const ListItem = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "Add_Data": {
//       return [...state, action.payload];
//     }
//     default:
//       return state;
//   }
// };
// export default ListItem;

const INITIAL_STATE = {
  data: [],
};
function authTypeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "AUTH_TYPE": {
      return {
        ...state, //old state
        //old data, new data
        data: [...state.data, action.payload],
      };
    }
    default:
      return state;
  }
}
export default authTypeReducer;
