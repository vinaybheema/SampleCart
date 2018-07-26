export function SearchTextChange(text){
    return {
        type: "SEARCH_TEXT_CHANGE", text
    };
}
export function GetItemIndex(index){
    return {
        type: "ITEM_INDEX", index
    };
}