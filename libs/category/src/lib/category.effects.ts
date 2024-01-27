import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryService } from './category.service';
import { EMPTY, catchError, exhaustMap, map } from 'rxjs';
import { categoryActionFailure, categoryActionSuccess, getCategoriesAction } from './category.actions';


@Injectable({
    providedIn: 'root'
})
export class CategoryEffects {
    constructor(private readonly categoryService: CategoryService, private actions$: Actions) { }

    loadCategories$ = createEffect(() => this.actions$.pipe(
        ofType(getCategoriesAction),
        exhaustMap(() => this.categoryService.getCategories()
            .pipe(
                map(categories => (categoryActionSuccess(categories))),
                catchError(() => EMPTY)
            ))
    ));
}