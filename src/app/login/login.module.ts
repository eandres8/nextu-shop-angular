import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SigninComponent } from './signin/signin.component';

@NgModule({
	declarations: [
		SigninComponent
	],
	imports: [
		CommonModule
	]
})
export class LoginModule { }
