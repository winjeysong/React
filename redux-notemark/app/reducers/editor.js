/**
 * @reducer for editor state
 */

import * as ActionTypes from "../actions";

const initialState = {
    selectedId: null,
    isEditing: false
};

export default function editor(state = initialState, action) {
    switch (action.type) {
    default:
        return state;
    case ActionTypes.SELECT_ENTRY:
        return {
            ...state,
            selectedId: action.id
        };
    case ActionTypes.UPDATE_SAVED_ENTRY:
        return {
            ...state,
            selectedId: action.id,
            isEditing: false
        };
    case ActionTypes.CREATE_NEW_ENTRY:
        return {
            ...state,
            selectedId: null,
            isEditing: true
        };
    case ActionTypes.EDIT_ENTRY:
        return {
            ...state,
            selectedId: action.id,
            isEditing: true
        };
    case ActionTypes.CANCEL_EDIT:
        return {
            ...state,
            isEditing: false
        };
    }
}
