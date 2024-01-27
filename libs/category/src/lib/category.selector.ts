// import { createFeatureSelector } from "@ngrx/store";
import { categoryState } from "./category.reducers";

export const selectCategoryState = (state:categoryState)=>state
export const selectCategories = (state:categoryState)=>state.categories
export const selectError = (state:categoryState)=>state.error