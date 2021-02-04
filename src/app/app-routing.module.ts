import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { NewsComponent } from './news/news.component';
import { StudioComponent } from './studio/studio.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
		{ path: '', component: HomeComponent },
		{ path: 'games', component: GamesComponent },
		{ path: 'news', component: NewsComponent },
		{ path: 'studio', component: StudioComponent },
		{ path: 'shop', component: ShopComponent },
		{ path: 'contact', component: ContactComponent },
		{ path: 'profile', component: ProfileComponent },
		{ path: '', redirectTo: '/', pathMatch: 'full' },
 		{ path: 'login', component: LoginComponent },
 		{ path: 'profile', component: ProfileComponent },
  		{ path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
	
export class AppRoutingModule { }
