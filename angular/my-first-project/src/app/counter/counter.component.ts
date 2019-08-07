import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

	@Input() count = 0;
	@Input() step = 1;
	@Output() valores = new EventEmitter();
  	constructor() { }

  	ngOnInit() {
  	}

	/**
	 * disminuir
	 */
	public disminuir() {
		this.count = this.count - this.step;
		this.valores.emit(this.count);
	}

	/**
	 * aumentar
	 */
	public aumentar() {
		this.count = this.count + this.step;
		this.valores.emit(this.count);
	}

	
	// /**
	//  * cambiaValor
	//  */
	// public cambiaValor(valor) {
	// 	this.inicial = valor;
	// }

	// /**
	//  * cambiaValorStep
	//  */
	// public cambiaValorStep(valor) {
	// 	this.step = valor;
	// }
}
