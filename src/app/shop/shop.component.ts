import { Component } from '@angular/core';
import { ArticlesComponent } from './../articles/articles.component';
import { WebServiceService } from "./../services/web-service.service";
import { Article } from './../model/article';

@Component({
  selector: 'app-root',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  title = 'FazingVoid-Shop';

  articles: any = [];
  selectedArticle: Article;

  constructor(
    public restApi: WebServiceService
  ) { }

  ngOnInit() {
    this.loadArticles()
  }

  onSelect(article: Article): void {
    console.log('selected id ' + article.id_article);
    this.selectedArticle = article;
  }

  // Get articles list
  loadArticles() {
    return this.restApi.getArticles().subscribe((data: {}) => {
      this.articles = data;
    })
  }

  deleteArticle(id: number) {
    if (window.confirm('Are you sure, you want to delete artilce with id ' + id + ' ?' )) {
      this.restApi.deleteArticle(id).subscribe(data => {
        this.loadArticles();
      })
    }
  }
}
