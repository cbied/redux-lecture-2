import axios from 'axios'

const initialState = {
    loading: null,
    characters: []
}

const GET_CHARACTERS = 'GET_CHARACTERS'

export function getStarWarsCharacters() {
    return {
        type: GET_CHARACTERS,
        payload: axios
                    .get("https://swapi.co/api/people")
    }
}

export default function reducer(state=initialState,action) {
    const { type, payload } = action
    switch(type) {
        case `${GET_CHARACTERS}_FULFILLED`: 
            return { ...state, loading: false, characters: payload.data.results}
        case `${GET_CHARACTERS}_PENDING`:
            return { ...state, loading: true}


        default: return state
    }
}
