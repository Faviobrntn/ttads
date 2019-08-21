import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primer-pagina',
  templateUrl: './primer-pagina.component.html',
  styleUrls: ['./primer-pagina.component.css']
})
export class PrimerPaginaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onButtonClicked(){
    const path = Math.random() > 0.5 ? 'primer-pagina' : 'segunda-pagina';
    this.router.navigate([path]);
  }

}
