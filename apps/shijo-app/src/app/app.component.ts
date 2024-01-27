import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CategoryService, getCategoriesAction, selectCategories } from '@ang-ecom-nx-integrated/category';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,MainNavComponent, CommonModule],
  selector: 'ang-ecom-nx-integrated-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'shijo-app';


  // categories$ = inject(CategoryService).getCategories()
  categories$ = this.store.select(selectCategories)
  // $ is used to say its stream of objects

  constructor(private readonly store:Store){}

  ngOnInit(): void {
    this.store.dispatch(getCategoriesAction())
    
  }
}
