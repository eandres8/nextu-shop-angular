import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	email:string = null;

	constructor(
		private http: HttpClient,
	) {
		this.email = localStorage.getItem('email') ? localStorage.getItem('email') : '';
	}

	// funcion para login
	login = ( body ) => {
		let url = `${environment.SERVER}/login`;
		return new Promise( (resolve, reject) => {
			return this.http.post(url, body)
				.subscribe(data => {
					console.log("data from login", data);
					resolve(data);
				},
				err => reject(err) );
		} );
	};


	logout = () => {
		localStorage.clear();
	}

}
