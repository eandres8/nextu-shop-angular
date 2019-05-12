import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private http: HttpClient,
	) { }

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

}
