import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './components/pages/layouts/header/header.component';
import { NavbarComponent } from './components/pages/layouts/header/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
