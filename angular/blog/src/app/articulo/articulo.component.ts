import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  
  @Input() article: any;

  constructor() { }

  ngOnInit() {
  }

}
