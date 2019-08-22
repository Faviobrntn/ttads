import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

	// @Input() usuario: any = {
	// 	nombre: null,
	// 	email: null,
	// 	password: null
    // }
    constructor(
		private router: Router,
		private auth: AuthService
	) { }

    ngOnInit() {
	}
	
	getUsuarios() {
		return this.auth.getUsuarios();
	}


	editar(id){
		this.router.navigate(['usuarios', 'editar', id]);
	};
	
	borrar(id){		
		if(this.auth.delete(id)){
			alert("Se borro con éxito");	
		}
		this.router.navigate(['usuarios']);
	};


	clonarUsuario(){
		// this.usuario = {};
	};

}
