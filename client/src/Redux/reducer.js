import { ADD_FAV, REMOVE_FAV , FILTER, ORDER, RESET, ADD_CHARACTER, REMOVE_CHARACTER , NEXT_PAGE , PREV_PAGE, ADD_LOCATION} from './Action/types';

const initialState = {
location: [],
numPage: 1,
characters:[],
myFavorites:[],
myFavoritesOrigin:[]
};
export default function rootReducer(state=initialState,{type, payload}){
    switch (type) {
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
                }    
            }
            return {
                ...state,
                characters: [payload,...state.characters]
            }
        case REMOVE_CHARACTER:
                const newCharacter = state.characters.filter((ch) => ch.id !== payload)
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
                const newFavorites = state.myFavorites.filter((ch) => ch.id !== payload)
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