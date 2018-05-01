import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from "./app.routes";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { SlidePageComponent } from './pages/slide-page/slide-page.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { UploadProductComponent } from './pages/upload-product/upload-product.component';
import { BarterService } from './service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SlidePageComponent,
    WelcomeComponent,
    UploadProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [BarterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
