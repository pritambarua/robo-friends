import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_PENDING } from "./constants";

const initial_search_state = {
    searchField: ''
}

export const searchRobots = (state = initial_search_state, action ={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
};

const initial_robots_request = {
    robots: [],
    isPending: true
}

export const requestRobots = (state = initial_robots_request, action= {}) =>{
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false});
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload});
        default:
            return state;
    }
}