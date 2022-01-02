import { AUTH_SUCCESS } from "../actions/auth"

const initial = {
    auth: false
}

export default function authReducer(state = initial, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                auth: true
            }

        default:
            return state
    }
}

export const authSelector = state => state.auth