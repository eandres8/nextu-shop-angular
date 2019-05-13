import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

// Modules
import { LoginModule } from './login/login.module';
import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		LoginModule,
		PagesModule,
		ServicesModule,
		SharedModule,
		PipesModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
