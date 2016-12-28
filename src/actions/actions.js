import fetch from 'isomorphic-fetch'

export const TOGGLE_SETTING = 'TOGGLE_SETTING';
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function toggleSetting() {
    return {
        type: TOGGLE_SETTING,
    }
}

function requestPosts(category) {
  return {
    type: REQUEST_POSTS,
    category
  }
}

function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts: posts.data.children.map(child => child.data),
  }
}


export function fetchPosts(category) {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestPosts(category))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`http://www.gavinfoster.com/api/v2/${category}.json`)
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receivePosts(json))
      )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}
