import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	public estaLogeado = false;
	public usuario = {
		id: null,
		nombre: null,
		email: null,
		password: null
	};

	public usuarios = [];
	
	constructor() { }


	getUsuarios() {
		console.log(this.usuarios);
		if (this.usuarios.length) {
			return this.usuarios;
		}
		return [];
	}
	
	getId() {
		return this.usuarios.length + 1;
	}


	add(item) {
		item.id = this.getId();
		this.usuarios.push(item);
	}

	delete(id){
		return delete this.usuarios[(id - 1)];		
	}

	get(id) {
		return this.usuarios[(id-1)];
	}

	edit(id: any, usuario: any) {
		this.usuarios[(id - 1)] = usuario;
	}
}
