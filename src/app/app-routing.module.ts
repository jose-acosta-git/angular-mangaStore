import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MangaStoreAboutComponent } from './manga-store-about/manga-store-about.component';
import { MangaStoreBooksComponent } from './manga-store-books/manga-store-books.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    component: MangaStoreBooksComponent,
  },
  {
    path: 'about',
    component: MangaStoreAboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
