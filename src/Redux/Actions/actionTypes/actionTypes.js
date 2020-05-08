import {
    GET_ARTICLES_INIT,
    GET_ARTICLES_SUCCESS,
    GET_ARTICLES_ERROR,

    DELETE_ARTICLES_INIT,
    DELETE_ARTICLES_SUCCESS,
    DELETE_ARTICLES_ERROR,

    READ_ARTICLES_INIT,
    READ_ARTICLES_SUCCESS,
    READ_ARTICLES_ERROR
} from "../ActionConstant/actionConstants";

export const ARTICLES_INIT = () => ({ type: GET_ARTICLES_INIT });
export const ARTICLES_SUCCESS = data => ({ type: GET_ARTICLES_SUCCESS, data: data });
export const ARTICLES_ERROR = data => ({ type: GET_ARTICLES_ERROR, data: data });

export const DELETE_INIT = () => ({ type: DELETE_ARTICLES_INIT });
export const DELETE_SUCCESS = data => ({ type: DELETE_ARTICLES_SUCCESS, data: data });
export const DELETE_ERROR = data => ({ type: DELETE_ARTICLES_ERROR, data: data });

export const READ_INIT = () => ({ type: READ_ARTICLES_INIT });
export const READ_SUCCESS = data => ({ type: READ_ARTICLES_SUCCESS, data: data });
export const READ_ERROR = data => ({ type: READ_ARTICLES_ERROR, data: data });
