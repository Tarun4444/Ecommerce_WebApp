import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app.router';
import { HeaderComponent } from './header/header.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProfileComponent } from './profile/profile.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { FooterComponent } from './footer/footer.component';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowDataComponent,
    PagenotfoundComponent,
    HeaderComponent,
    ShoppingCartComponent,
    WishlistComponent,
    ProfileComponent,
    RecommendationsComponent,
    FooterComponent,
    ShopByCategoryComponent
  ],
  imports: [
    HttpClient,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
