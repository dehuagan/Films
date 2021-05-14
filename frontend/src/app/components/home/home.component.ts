import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {HttpserviceService} from '../../services/httpservice.service';
import {Router} from '@angular/router';
import {StorageService} from '../../services/storage.service';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  popular_movies='popular_movies';
  top_rated_movies = 'top_rated_movies';
  trending_movies = 'trending_movies';
  popular_tv = 'popular_tv';
  top_rated_tv = 'top_rated_tv';
  trending_tv = 'trending_tv';
  title1 = 'Popular Movies';
  title2 = 'Top Rated Movies';
  title3 = 'Trending Movies';
  title4 = 'Popular TV Shows';
  title5 = 'Top Rated TV Shows';
  title6 = 'Trending TV Shows';

  movie = 'movie';
  tv = 'tv';

  ismobile:boolean = false;
  items_mobile = [];
  // items:object[][] = [];
  ids:string[][] = [];
  categories:string[][] = [];
  imgs:string[][] =[];
  show = false;
  // @ts-ignore
  @ViewChild('carousel3', {static : false}) carousel3!: NgbCarousel;
  // @ts-ignore
  @ViewChild('carousel4', {static : false}) carousel4!: NgbCarousel;
  constructor(public httpService: HttpserviceService,public router:Router,public storage:StorageService) {
  }
  ngOnInit(): void {
    this.ismobile = this.isMobile();
    if(this.ismobile) {
      $(".carousel1 .carousel-indicators").css("display", "none");
      $(".carousel2 .row").css("margin-left", "auto");
    }else {
      $(".carousel2 .carousel-indicators").css("bottom", "-25%");
    }
      this.getData();

  }
  ngAfterViewInit():void {
    console.log('after view');
    this.carousel3.pause();
    this.carousel4.pause();
  }
  isMobile(): boolean {
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
    var continue_list = this.storage.get('continue');
    if(continue_list!=null&&continue_list.length!=0){
      this.show = true;
      if(this.isMobile()){
        for(var i=continue_list.length-1;i>=0;i--){
          var obj = {};
          var cur_arr = continue_list[i].split(',');
          // @ts-ignore
          obj['id'] = cur_arr[0];
          // @ts-ignore
          obj['category'] = cur_arr[1];
          // @ts-ignore
          obj['img'] = cur_arr[2];
          // @ts-ignore
          this.items_mobile.push(obj);
        }
      }else{
        this.imgs = [];
        this.ids = [];
        this.categories = [];
        let index = 0;
        let img_arr=[];
        let id_arr=[];
        let category_arr=[];
        for(var i=continue_list.length-1;i>=0;i--){

          // var obj = {};
          var cur_arr = continue_list[i].split(',');

          id_arr.push(cur_arr[0]);
          category_arr.push(cur_arr[1]);
          img_arr.push(cur_arr[2]);

          index++;
          if(index%6==0||index == continue_list.length){
            this.ids.push(id_arr);
            this.categories.push(category_arr);
            this.imgs.push(img_arr);
            id_arr = [];
            category_arr = [];
            img_arr = [];
          }

        }
      }


    }else{
      this.show = false;
    }

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
