import * as api from '../api';

/*Action creators

Action creators are functions that return an action, an object with a type and payload

const getPosts = () =>{
    const action = { type: 'FETCH_ALL', payload: []}

    return action;
}

With redux thunk since we are dealing with asynchronous logic have to add the async dispatch function and instead of returning the action have to dispatch it

const getPosts = () => async (dispatch) =>{
    const action = { type: 'FETCH_ALL', payload: []}

    dispatch (action);
} */

export const getPosts = () => async (dispatch) =>{
    try {
        const { data } = await api.fetchPosts();

        dispatch ({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message)
    }
}