import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-segunda-pagina',
  templateUrl: './segunda-pagina.component.html',
  styleUrls: ['./segunda-pagina.component.css']
})
export class SegundaPaginaComponent implements OnInit {

  id;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
      this.router.params.subscribe((params) => this.id = params.id);
  }

}
