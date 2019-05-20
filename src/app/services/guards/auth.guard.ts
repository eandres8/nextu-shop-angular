import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(
		private _auth: AuthService,
		private router: Router,
	) {

	}

	canActivate(){
		console.log("validado por el guard", this._auth.email);
		if ( this._auth.email ) {
			return true;	
		}else {
			this.router.navigate(['/login']);
			return false;
		}
	}
}
