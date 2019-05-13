import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { HomeComponent } from './home/home.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		PipesModule, 
		FormsModule,
	]
})
export class PagesModule { }
