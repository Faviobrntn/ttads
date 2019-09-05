import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
// import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  	formulario = new FormGroup({
		nombre: new FormControl('', [this.validarNombre()]),
		apellido: new FormControl('', [this.validarNombre()]),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, this.validarPassword()]),
		repassword: new FormControl('', [Validators.required, this.validaIgualdad()]),
  	}, [Validators.required]);


  	constructor() { }

  	ngOnInit() { }


	validarNombre(nameRe: RegExp = /([A-Z])\w/) {
		// var nameRe: RegExp = /([A-Z])\w+/g;
		return (control: AbstractControl): { [key: string]: any } | null => {
			const forbidden = nameRe.test(control.value);
			console.log(forbidden);
			console.log(control.value);
			console.log(nameRe);
			
			return forbidden ? { 'forbiddenName': { value: control.value } } : null;
		};
	}
	

	validarPassword() {
		return (control: AbstractControl) => {
			// if (control.value != this.formulario.value.password) {
			// 	return null;
			// }
			return { empiezaGuionBajo: true };
		};
	}


	validaIgualdad(): import("@angular/forms").ValidatorFn {
		return (control: AbstractControl) => {
			// if (control.value != this.formulario.value.password) {
			// 	return null;
			// }
			return { empiezaGuionBajo: true };
		};
	}

	onSubmit() {
		console.log(this.formulario.value);
	}

}
