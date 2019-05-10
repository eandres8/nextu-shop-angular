import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor() { }

	// funcion para login
	login = ( body ) => {
		let url = environment.SERVER;
		console.log("body", body);
		console.log("url", url);
	};

}
