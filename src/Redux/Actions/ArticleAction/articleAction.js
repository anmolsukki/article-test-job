import * as actionTypes from "../actionTypes/actionTypes";
import connection from "../../../Config/APIurl/connection";
import axios from "axios";

const headers = {
    "Content-Type": "application/json"
};

export const articles = (data) => {
    let url = connection.concat("/articles");
    return (dispatch)  => {
        dispatch(actionTypes.ARTICLES_INIT());
        return axios
        .get(url, data, headers)
        .then(res => {
            setTimeout(() => {
            console.log(res,'data get successfully')
            dispatch(actionTypes.ARTICLES_SUCCESS(res));
            }, 0); 
        })
        .catch((error) =>{
            console.log(error, "data not found error");
            dispatch(actionTypes.ARTICLES_ERROR(error));
        });
    };
}

export const deleteArticle = (data) => {
    let url = connection.concat(`/articles/${data}`);
    return (dispatch)  => {
        dispatch(actionTypes.DELETE_INIT());
        return axios
        .delete(url, data, headers)
        .then(res => {
            console.log(res,'data deleted successfully')
            dispatch(actionTypes.DELETE_SUCCESS(data));
        })
        .catch((error) =>{
            console.log(error, "data not delete error");
            dispatch(actionTypes.DELETE_ERROR(error));
        });
    };
}

export const readArticle = (data) => {
    let url = connection.concat(`/articles/${data.id}`);
    let upDateData = data;
    upDateData.isRead = !upDateData.isRead;
    return (dispatch)  => {
        dispatch(actionTypes.READ_INIT());
        return axios
        .put(url, upDateData, headers)
        .then(res => {
            console.log(res,'data update successfully')
            dispatch(actionTypes.READ_SUCCESS(data));
        })
        .catch((error) => {
            console.log(error, "data not delete error");
            dispatch(actionTypes.READ_ERROR(error));
        });
    };
}
