import {Component, OnInit, ViewChild} from '@angular/core';

import {HttpserviceService} from '../../services/httpservice.service';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [];
  ids = [];
  titles = [];
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  public showIndicators:boolean = true;
  poster = [];
  pauseOnHover = true;
  pauseOnFocus = true;

  constructor(public httpService: HttpserviceService,public router:Router,public storage:StorageService) { }

  // @ts-ignore
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  ngOnInit(): void {
    this.getData();
    this.showIndicators = !this.isMobile();
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
  isMobile(): boolean {
    console.log("ismobile");
    var userAgentInfo = navigator.userAgent;
    var mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var mobile_flag = false;
    for (var v = 0; v < mobileAgents.length; v++) {
      if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
        mobile_flag = true;
        break;
      }
    }
    var screen_width = window.screen.width;
    var screen_height = window.screen.height;
    if (screen_width < 500 && screen_height < 800) {
      mobile_flag = true;
    }
    return mobile_flag;
  }

  getData(){
    let url = 'https://csci571-309912.wm.r.appspot.com/apis/current_movies';
    this.httpService.axiosGet(url).then((data) => {
      // tslint:disable-next-line:no-unused-expression
      // @ts-ignore
      let res = data.data.res_array;
      for(var i=0;i<5;i++){
        // @ts-ignore
        let img_url = 'https://image.tmdb.org/t/p/original' + res[i].backdrop_path;
        console.log(img_url);
        // @ts-ignore
        this.images.push(img_url);
        // @ts-ignore
        this.ids.push(res[i].id);
        // @ts-ignore
        this.titles.push(res[i].title);

        // @ts-ignore
        this.poster.push('https://image.tmdb.org/t/p/w500' + res[i].poster_path);
      }
      // this.images.push();
      console.log(res);
    });
  }

  jump(id:string,category:string, img:string){
    var continue_list = this.storage.get('continue');
    var data = id+','+category+','+img;
    if(continue_list == null){
      continue_list = new Array();
    }
    if(continue_list.indexOf(data)>=0){
      var idx = continue_list.indexOf(data);
      continue_list.splice(idx,1);
    }
    if(continue_list.length>24){
      continue_list.splice(0,1);
    }
    continue_list.push(data);
    this.storage.set('continue',continue_list);
    this.storage.set('cur_img',img);
    console.log('reload: '+id+' '+category);
    var url = '/watch/'+category+'/'+id;
    this.router.navigateByUrl('', {skipLocationChange: true}).then(() => {
      this.router.navigate([url]);
    });
  }

}
