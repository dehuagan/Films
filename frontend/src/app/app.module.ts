import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { MylistComponent } from './components/mylist/mylist.component';
import {HttpserviceService} from './services/httpservice.service';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MultiCarouselComponent } from './components/multi-carousel/multi-carousel.component';
import { DetailComponent } from './components/detail/detail.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { CastComponent } from './components/cast/cast.component';
import {StorageService} from'./services/storage.service';
import { ExternalComponent } from './components/external/external.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { NavigateBarComponent } from './components/navigate-bar/navigate-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MylistComponent,
    CarouselComponent,
    MultiCarouselComponent,
    DetailComponent,
    VideoPlayerComponent,
    CastComponent,
    ExternalComponent,
    ReviewsComponent,
    NavigateBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    YouTubePlayerModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpserviceService,StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
