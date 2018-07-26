import { combineReducers } from "redux";

var initialState = {itemIndex : 0};
// export const searchResult = (state=[], action) => {
//     switch(action.type){
//         case "SEARCH_TEXT_CHANGE":
//             return (Object.assign({}, state, {value: action.value}));//action.value;
//         default:
//             return state;
//     }
// };

const itemIndex = (state="", action) => {
    switch(action.type){
        case "ITEM_INDEX":
            //return (Object.assign({}, state, {value: action.value}));
            return action.value;
        // case "SEARCH_TEXT_CHANGE":
        //     return (Object.assign({}, state, {value: action.value}));
        default:
            return state;
    }
}

 var reducer = combineReducers({itemIndex});

export default reducer;