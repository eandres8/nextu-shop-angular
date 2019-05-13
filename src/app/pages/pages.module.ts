import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HomeComponent } from './home/home.component';

// Modules
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,
		SharedModule,
	]
})
export class PagesModule { }
