import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UploadComponent } from './components/upload/upload.component';

// Routes
import { APP_ROUTES } from './app.routes';

// Services
import { LoadImagesService } from './services/load-images.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [
    LoadImagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
