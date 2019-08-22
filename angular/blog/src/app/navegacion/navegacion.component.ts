import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

	estaLogeado = false;

    constructor(private auth: AuthService) { }

    ngOnInit() {
		this.estaLogeado = this.auth.estaLogeado;

		console.log(this.auth.estaLogeado);
		console.log(this.auth.usuario);
		
    }

}
