import { createReducer, on } from '@ngrx/store';
import { categoryActionFailure, categoryActionSuccess } from './category.actions';


export interface categoryState {
    categories: string[];
    currentCategory: string;
    error: string[];

};

const initialState: categoryState = {
    categories: [],
    currentCategory: '',
    error: []
};

export const categoryReducer = createReducer(
    initialState,
    on(categoryActionSuccess, (state, action) => {
        return {
            ...state,
            categories: action.categories,
            error: []
        };
    }),
    on(categoryActionFailure, (state, action) => {
        return {
            ...state,
            categories: [],
            error: action.error
        };
    })
);