import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { MainViewComponent } from "./components/main-view/main-view.component";
import { ContactComponent } from "./components/contact/contact.component";
import { NotFoundComponent } from "./components/shared/not-found/not-found.component";


const routes: Routes = [
  { path: 'FrontCamp2019AngularModule.github.io', redirectTo: '', pathMatch: 'full' },
  { path: 'FrontCamp2019AngularModule.github.io', component: AppComponent },
  { path: 'FrontCamp2019AngularModule.github.io/menu', component: MainViewComponent },
  { path: 'FrontCamp2019AngularModule.github.io/contact', component: ContactComponent },
  { path: 'FrontCamp2019AngularModule.github.io/404', component: NotFoundComponent },
  { path: '**', redirectTo: 'FrontCamp2019AngularModule.github.io/404' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
