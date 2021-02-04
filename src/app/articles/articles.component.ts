import { Component, OnInit, Input } from '@angular/core';
import { WebServiceService } from "./../services/web-service.service";
import { Router } from '@angular/router';
import { ShopComponent } from './../shop/shop.component';
import { Article } from './../model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {

  @Input() articleDetails = { id_article: '', id_category: '', name_de: '', name_en: '', price: '', release_date: '',
	description_de: '', description_en: '', availability: '', pictures: '', game_language: '', audio_languge: '',
	video_link: '', teaser_de: '', teaser_en: '', features_de: '', features_en: '', age_rating: '',
	content_rating: '', system_requirements: '', c_date: '', active: '',};

  constructor(
    public restApi: WebServiceService,
    public router: Router,
    public app: ShopComponent,
  ) { }

  ngOnInit() {
  }

  // Get article list
  addArticle() {
    this.restApi.createArticle(this.articleDetails).subscribe(data => {
      this.app.loadArticles(); this.router.navigate(['/']);
    });

  }

}
