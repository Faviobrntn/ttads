import { Component } from '@angular/core';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'Favio';
	public valorContador = 0;
	public valorContadorStep = 0;
	
	/**
	 * cambiaValor
	 */
	public cambiaValor(valor) {
		this.valorContador = valor;
	}

	/**
	 * cambiaValorStep
	 */
	public cambiaValorStep(valor) {
		this.valorContadorStep = valor;
	}

}
