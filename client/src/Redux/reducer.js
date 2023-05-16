import {RESET_CHARACTER, SEARCH_CHARACTER, ADD_FAV, REMOVE_FAV , FILTER, ORDER, RESET, ADD_CHARACTER, REMOVE_CHARACTER , NEXT_PAGE , PREV_PAGE, ADD_LOCATION, HANDLE_NUMBER} from './Action/types';

const initialState = {
location: [],
numPage: 1,
characters:[],
charactersOrigin:[],
myFavorites:[],
myFavoritesOrigin:[]
};
export default function rootReducer(state=initialState,{type, payload}){
    switch (type) {
        case HANDLE_NUMBER:
            return {
                ...state,
                numPage: payload
            }
        case SEARCH_CHARACTER:
            return {
                ...state,
                characters: [payload]
            } 
        case ADD_LOCATION:
            return {
                ...state,
                location: [...state.location, payload]
            }
        case NEXT_PAGE:
            return {
                ...state,
                numPage: state.numPage + 1 
            }
            case PREV_PAGE:
                return {
                    ...state,
                    numPage: state.numPage - 1 
                }    
        case ADD_CHARACTER:
            if(Array.isArray(payload)){
                return {
                    ...state,
                    characters: [...state.characters,...payload], 
                    charactersOrigin: [...state.characters,...payload]
                }    
            }
            return {
                ...state,
                characters: [payload,...state.characters]
            }
        case RESET_CHARACTER: 
            return {
                ...state,
                characters: [...state.charactersOrigin]
            }
        case REMOVE_CHARACTER:
                const newCharacter = state.charactersOrigin.filter((ch) => ch.id !== payload)
                return {
                    ...state,
                    myFavorites: newCharacter,
                    myFavoritesOrigin: newCharacter,
                };
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavoritesOrigin,payload], 
                myFavoritesOrigin: [...state.myFavoritesOrigin, payload]
            };
        case REMOVE_FAV:
                const newFavorites = state.myFavoritesOrigin.filter((ch) => ch.id !== payload)
                return {
                    ...state,
                    myFavorites: newFavorites,
                    myFavoritesOrigin: newFavorites,
                };
        case FILTER:
            const copyFilter = state.myFavoritesOrigin.filter
                ((character) => character.gender === payload)
                return {
                    ...state,
                    myFavorites: copyFilter
                }
        case RESET: 
        return {
            ...state,
            myFavorites: [...state.myFavoritesOrigin]
        }
                
        case ORDER:
            const orderCharacter = state.myFavoritesOrigin.sort((a, b) => {
                if (a.id > b.id) {
                    return "Ascendente" === payload ? 1 : - 1
                }
                if (a.id < b.id) {
                    return "Descendente" === payload ? 1 : - 1
                }
                return 0
            })
                return {
                    ...state,
                    myFavorites: orderCharacter
                }
                default:
                    return state;
            }
}