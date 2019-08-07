import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

	currentItem = {
		description: '',
		done: false,
		date: null
	};

	items = [];

  	constructor() { }
	
  	ngOnInit() {

	}

	addItem(){
		if (this.currentItem.description.trim() != '') {
			this.currentItem.date = new Date();
			this.items.push(this.currentItem);
		}

		this.currentItem = {
			description: '',
			done: false,
			date: null
		};

	}

	removeItem(key){
		if(this.items[key].done){
			alert("No se pude borrar.");
		}else{
			this.items.splice(key);
		}
	}

}
