import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProfileComponent } from './profile/profile.component';
import { FazingVoidComponent } from './fazing-void/fazing-void.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';
import { NewsComponent } from './news/news.component';
import { StudioComponent } from './studio/studio.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ArticlesComponent } from './articles/articles.component';

import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import localeUs from '@angular/common/locales/es-US';
import localeUsExtra from '@angular/common/locales/extra/en-US-POSIX';
import { AlertComponent } from './alert/alert.component';

registerLocaleData(localeDe, 'de');
registerLocaleData(localeUs, 'es-US');

const routes: Routes = [
		{ path: '', component: HomeComponent },
		{ path: 'games', component: GamesComponent },
		{ path: 'news', component: NewsComponent },
		{ path: 'studio', component: StudioComponent },
		{ path: 'shop', component: ShopComponent },
		{ path: 'contact', component: ContactComponent },
		{ path: 'profile', component: ProfileComponent },
		{ path: 'login', component: LoginComponent },
		{ path: 'profile', component: ProfileComponent },
		{ path: 'signup', component: SignupComponent },
		{ path: 'about', component: AboutComponent },
		{ path: 'articles', component: ArticlesComponent},
	];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ShopComponent,
    ProfileComponent,
    FazingVoidComponent,
    DashboardComponent,
    GamesComponent,
    NewsComponent,
    StudioComponent,
	FooterComponent,
	SignupComponent,
	LoginComponent,
	ArticlesComponent,
	AlertComponent,
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	HttpClientModule,
	FormsModule,
	RouterModule.forRoot([
      { path: '', component: ShopComponent },
    ])
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
