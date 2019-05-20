import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Services
import { AuthService } from './auth.service';
import { ProductsService } from './products.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
	],
	providers: [
		AuthService,
		ProductsService,
		AuthGuard,
	],
})
export class ServicesModule { }
