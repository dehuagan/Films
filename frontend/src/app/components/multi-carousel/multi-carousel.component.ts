import {Component, Input, OnInit, SimpleChange, SimpleChanges, ViewChild} from '@angular/core';
import {HttpserviceService} from '../../services/httpservice.service';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import {count} from 'rxjs/operators';
import {ActivatedRoute,NavigationEnd, Router} from '@angular/router';
import {StorageService} from '../../services/storage.service';
@Component({
  selector: 'app-multi-carousel',
  templateUrl: './multi-carousel.component.html',
  styleUrls: ['./multi-carousel.component.css']
})
export class MultiCarouselComponent implements OnInit {


  metaCategory = '';

  images: string[][] = [];
  ids: string[][] = [];
  images_mobile: string[] = [];
  ids_mobile: string[] = [];
  ismobile:boolean = false;
  notMobile:boolean=true;
  // @ts-ignore
  @ViewChild('carousel', {static : true}) carousel: any
  @ViewChild('carousel1', {static : true}) carousel1: any
  // @Input() useGet1!:boolean;
  @Input() category!: string;
  @Input() sid!:string;
  @Input() direction!:string

  @Input() title!: string;
  constructor(public httpService: HttpserviceService, public router:Router,public storage:StorageService) { }



  ngOnInit(): void {
    this.ismobile = this.isMobile();
    if(this.ismobile) {
      this.notMobile = false;
      $(".carousel1 .carousel-indicators").css("display", "none");
      $(".carousel2 .row").css("margin-left", "auto");
    }else {
      $(".carousel2 .carousel-indicators").css("bottom", "-25%");
    }


    this.getData();

    this.carousel.pause();
    this.carousel1.pause();
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

  getData(): void{
    console.log("direction"+this.direction);
    let url = 'https://csci571-309912.wm.r.appspot.com/apis/'+this.direction+'?id='+this.sid+'&category='+this.category;
    this.httpService.axiosGet(url).then((data) => {
      let baseurl = 'https://image.tmdb.org/t/p/w500';
      // tslint:disable-next-line:no-unused-expression
      // @ts-ignore
      let res = data.data.res_array;
      // @ts-ignore
      let count = data.data.count;
      if(this.ismobile){
          this.images_mobile = [];
          this.ids_mobile = [];
          for(let i=0;i<count;i++){
            this.images_mobile.push(baseurl+res[i].poster_path);
            this.ids_mobile.push(res[i].id);
          }
      }else{
          this.images = [];
          this.ids = [];
          let image_arr: string[] = [];
          let id_arr: string[] = [];
          let index = 0;
          while(index<count){
            image_arr.push(baseurl+res[index].poster_path);
            id_arr.push(res[index].id);
            index++;
            if(index%6==0||index==count){
              this.images.push(image_arr);
              this.ids.push(id_arr);
              image_arr = [];
              id_arr = [];
            }
          }
      }

      console.log(this.images);


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
