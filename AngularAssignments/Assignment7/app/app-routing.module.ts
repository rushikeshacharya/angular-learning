import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { componentFactoryName } from '@angular/compiler';
import { TechnologiesComponent } from './technologies/technologies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path : 'books', component : BooksComponent},
  {path : 'technologies' , component : TechnologiesComponent},
  {path: '', component : TechnologiesComponent},
  {path : '**', component : PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
