import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'usuarios-formulario',
  templateUrl: './usuarios-formulario.component.html',
  styleUrls: ['./usuarios-formulario.component.css']
})
export class UsuariosFormularioComponent implements OnInit {

	@Input() usuario: any = {
		nombre: null,
		email: null,
		password: null
	};

	id: any;

	constructor(
		private router: Router,
		private routerActivo: ActivatedRoute,
		private auth: AuthService
	) { }

	ngOnInit() {
		this.routerActivo.params.subscribe((params) => this.id = params.id);

		if (this.id) {
			this.usuario = this.auth.get(this.id);
		}
	}


	nuevo() {
		if (!this.usuario.nombre) { alert("Nombre vacio"); return; }
		if (!this.usuario.email) { alert("Email vacio"); return; }
		if (!this.usuario.password) { alert("Contraseña vacia"); return; }
		this.auth.add(this.usuario);

		this.router.navigate(['usuarios']);
	}

	editar() {
		if (!this.usuario.nombre) { alert("Nombre vacio"); return; }
		if (!this.usuario.email) { alert("Email vacio"); return; }
		if (!this.usuario.password) { alert("Contraseña vacia"); return; }

		this.auth.edit(this.id, this.usuario);

		this.router.navigate(['usuarios']);
	}

}
