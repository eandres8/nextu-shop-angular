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
		console.log(forma);

		if ( forma.valid ) {	
			// consulta a backend
			this._auth.login( forma.value );
			this.router.navigate(['/']);
		}


	};

}
