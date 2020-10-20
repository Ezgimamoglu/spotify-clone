export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //token:
  //'BQAPE-koQPedyxiUouhqfvdTz2HsEei6EeYLOAY_qk01T-Mj37…L2l9EygsiUkTzW5Bv3y1zsoJVqwSXtXjAuvN2Sz4qm0is9x8Y',
};
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
