import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  
  @Input() article: any;
  selectedArticle: any = null;
  id: null;

  constructor(private httpClient: HttpClient, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params) => this.id = params.id);
    this.loadArticle();
  }

  private loadArticle() {
    console.log(this.id);
    
    this.httpClient.get('https://conduit.productionready.io/api/articles/'+this.id)
      .subscribe((response: any) => this.selectedArticle = response.article);
      
  }
}
