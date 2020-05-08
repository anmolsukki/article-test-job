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
} from "../Actions/ActionConstant/actionConstants";

const initialState = {
    getData: [],
    isLoading: false,
    error: null
}

const ArticleReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ARTICLES_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case GET_ARTICLES_SUCCESS : 
        return {
            ...state,
            getData : action.data ? action.data : null,
            isLoading : false
        };
        case GET_ARTICLES_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case DELETE_ARTICLES_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case DELETE_ARTICLES_SUCCESS :
        const newState = state.getData.data.filter( val => val.id !== action.data );
        newState.data = newState
        return {
            ...state,
            getData  : newState,
            isLoading : false
        };
        case DELETE_ARTICLES_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case READ_ARTICLES_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case READ_ARTICLES_SUCCESS :
        let allData = state.getData.data;
        let updatedData = allData.map((article) => {
            if(article.id === action.data.id) {
                article = action.data;
            }
            return article;
        });
        console.log(action.data)
        updatedData.data = updatedData;
        updatedData.id = action.data.id;
        return {
            ...state,
            getData  : updatedData,
            isLoading : false
        };
        case READ_ARTICLES_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };
        default : 
    }
    return state;
};

export default ArticleReducer;
