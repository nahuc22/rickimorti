import {HANDLE_NUMBER, RESET_CHARACTER , SEARCH_CHARACTER, ADD_FAV, FILTER, REMOVE_FAV, ORDER, RESET, ADD_CHARACTER, REMOVE_CHARACTER, NEXT_PAGE, PREV_PAGE, ADD_LOCATION} from './types';

export function addLocation(path){
    return {
        type: ADD_LOCATION, 
        payload: path 
    }
}

export function addFav(character) {
    return {
        type: ADD_FAV,
        payload: character,
    };
}
export function removeFav(id) {
    return {
        type: REMOVE_FAV,
        payload: id,
    }
};

export function filterCharacter(gender) {
    return {
        type: FILTER,
        payload: gender
    }
}

export function orderCharacter(order) {
    return {
        type: ORDER,
        payload: order
    }
}

export function resetCharacter(){
    return {
        type: RESET_CHARACTER
    }
}

export function reset(){
    return{
        type: RESET
    }
}

export function nextPage(){
    return {
        type: NEXT_PAGE,
        
    }
    
}

export function prevPage(){
    return{
        type: PREV_PAGE
    }
}
export function searchCharacter(character){
    return {
        type: SEARCH_CHARACTER,
        payload: character
    }
}

export function addCharacter(character){
    return {
        type: ADD_CHARACTER,
        payload: character
    }
}
export function removeCharacter(id){
    return {
        type: REMOVE_CHARACTER,
        payload: id
    }
}
export function handleNumber(num){
    return {
        type: HANDLE_NUMBER,
        payload: num
    }
}