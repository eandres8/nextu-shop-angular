import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './login/signin/signin.component';

const routes: Routes = [
	{path:'', component: HomeComponent, pathMatch: 'full'},
	{path:'login', component: SigninComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {useHash: true})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
