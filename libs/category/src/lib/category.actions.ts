import { createAction } from '@ngrx/store';


export const getCategoriesAction = createAction('[Category] Get Categories');
export const categoryActionSuccess = createAction('[Category] Get Categories Sucess', (categories: string[]) => ({ categories }));
export const categoryActionFailure = createAction('[Category] Get Categories Failure', (error: string[]) => ({ error }));