import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @Input() email;
    @Input() password;

	constructor(
		private httpClient: HttpClient, 
		private router: Router,
		private auth: AuthService
	) { }

    ngOnInit() {
    }


	iniciar() {
		if(this.email){
			if (this.password) {
				this.auth.usuario.email = this.email;
				this.auth.usuario.password = this.password;
				this.auth.estaLogeado = true;
				
				this.router.navigate(['home']);
			}else{
				alert("Contraseña vacia.");
			}
		}else{
			alert("Email vacio.");
		}
	}
	
	salir() {
		console.log(this.email);
		console.log(this.password);
		
		this.auth.estaLogeado = false;
		this.router.navigate(['login']);
	}


}
