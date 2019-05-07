import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

// Modules
import { LoginModule } from './login/login.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		LoginModule,
		PagesModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
