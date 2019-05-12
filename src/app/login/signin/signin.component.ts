import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Services
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

	error_code: string = '';

	constructor(
		public router: Router,
		public _auth: AuthService,
	) { }

	ngOnInit() {
	}

	// =======================================================
	// 
	// =======================================================
	ingresar = ( forma: NgForm ) => {
		console.log(forma.value);

		if ( forma.valid ) {	
			// consulta a backend

			this._auth.login( forma.value )
				.then( (data:any) => {
					if ( data.ok ) {
						this.error_code = '';
						this.router.navigate(['/']);
					} else {
						this.error_code = data.message;
					}
				} )
				.catch( err => {
					this.error_code = 'No se pudo conectar con el servidor';
				} );
		}

	};

}
