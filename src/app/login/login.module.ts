import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// Components
import { SigninComponent } from './signin/signin.component';

@NgModule({
	declarations: [
		SigninComponent
	],
	imports: [
		CommonModule,
		FormsModule,
	]
})
export class LoginModule { }
