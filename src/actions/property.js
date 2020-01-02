import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_PROPERIES,
  GET_PROPERTY,
  DELETE_PROPERTY,
  ADD_PROPERTY,
  UPDATE_PROPERTY,
  PROPERTY_ERROR,
  CLEAR_PROPERTY
} from './types';

// Get properties
export const getProperties = () => async dispatch => {
  try {
    const res = await axios.get('/api/properties');

    dispatch({
      type: GET_PROPERIES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROPERTY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add like
// export const addLike = id => async dispatch => {
//   try {
//     const res = await axios.put(`/api/posts/like/${id}`);

//     dispatch({
//       type: UPDATE_LIKES,
//       payload: { id, likes: res.data }
//     });
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// Remove like
// export const removeLike = id => async dispatch => {
//   try {
//     const res = await axios.put(`/api/posts/unlike/${id}`);

//     dispatch({
//       type: UPDATE_LIKES,
//       payload: { id, likes: res.data }
//     });
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// Delete Properties
export const deleteProperties = id => async dispatch => {
  try {
    await axios.delete(`/api/properties/${id}`);

    dispatch({
      type: DELETE_PROPERTY,
      payload: id
    });

    dispatch(setAlert('Property Removed', 'success'));
  } catch (err) {
    dispatch({
      type: PROPERTY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Property
export const addProperty = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/properties', formData, config);

    dispatch({
      type: ADD_PROPERTY,
      payload: res.data
    });

    dispatch(setAlert('Property Created', 'success'));
  } catch (err) {
    dispatch({
      type: PROPERTY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get Property
export const getProperty = id => async dispatch => {
  try {
    const res = await axios.get(`/api/properties/${id}`);

    dispatch({
      type: GET_PROPERTY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROPERTY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add comment
// export const addComment = (postId, formData) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   try {
//     const res = await axios.post(
//       `/api/posts/comment/${postId}`,
//       formData,
//       config
//     );

//     dispatch({
//       type: ADD_COMMENT,
//       payload: res.data
//     });

//     dispatch(setAlert('Comment Added', 'success'));
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// Delete comment
// export const deleteComment = (postId, commentId) => async dispatch => {
//   try {
//     const res = await axios.delete(`/api/posts/comment/${postId}/${commentId}`);

//     dispatch({
//       type: REMOVE_COMMENT,
//       payload: commentId
//     });

//     dispatch(setAlert('Comment Removed', 'success'));
//   } catch (err) {
//     dispatch({
//       type: PROPERTY_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };