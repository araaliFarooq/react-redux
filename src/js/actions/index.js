import actionTypes from './action-types';

export function addArticle(payload) {
  return { type: actionTypes.ADD_ARTICLE, payload };
}

export function getData() {
  return function(dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'DATA_LOADED', payload: json });
      });
  };
}
