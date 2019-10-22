import actionTypes from '../actions/action-types';

const initialState = {
  articles: [],
  remoteArticles: []
};
function rootReducer(state = initialState, action) {
  if (action.type === actionTypes.ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === actionTypes.DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;
