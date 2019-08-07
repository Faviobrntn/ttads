import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

	articles = [];
	selectedArticle: any = null;
	@Input() search = null;
	constructor(private httpClient: HttpClient) { }

	ngOnInit() {
		this.loadArticles();
	}

	private loadArticles() {
		this.httpClient.get('https://conduit.productionready.io/api/articles')
			.subscribe((response: any) => this.articles = response.articles);
	}

	onArticleRowClicked(article: any) {
		if (article.createdAt) {
			let fecha = new Date(article.createdAt);
			article.fecha = fecha.toLocaleDateString("es-Ar", { 
				year: 'numeric', 
				month: 'numeric', 
				day: 'numeric', 
				hour: 'numeric', 
				minute: 'numeric', 
				second: 'numeric' 
			});
		}
		this.selectedArticle = article;
	}
	
	onArticleRowUnclicked() {
		this.selectedArticle = null;
	}

}
