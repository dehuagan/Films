import {Component, Input, OnInit, Output, EventEmitter, SimpleChange, SimpleChanges} from '@angular/core';
import {YouTubePlayerModule} from'@angular/youtube-player';
import {HttpserviceService} from '../../services/httpservice.service';
import {fromEvent} from 'rxjs';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input()id!:string;
  @Input()category!:string;
  video_id!:string;
  width:number=500;
  height:number=250;
  @Output() toFather = new EventEmitter<string>();

  signalItem(value:string){
    this.toFather.emit(value);
  }

  constructor(public httpService: HttpserviceService) { }

  ngOnInit(): void {
    this.getData(this.id,this.category);

    let apiLoaded = false;
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
      if(this.isMobile()){
        var screen_width = window.screen.width;
        this.width = screen_width*0.9

        this.height = this.width*0.5;
      }
        // fromEvent(window, 'resize').subscribe((event) => {
        //   console.log("change");
        //   this.width = window.screen.width*0.3;
        // });


    }

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

  getData(id:string, category:string) {
    let url = 'https://csci571-309912.wm.r.appspot.com/apis/video?id='+id+'&category='+category;
    this.httpService.axiosGet(url).then((data) => {
      // tslint:disable-next-line:no-unused-expression
      // @ts-ignore
      let res = data.data.res_array;
      // @ts-ignore
      let index = data.data.count;

      if(index>0){
        this.video_id = res[0].key;
        this.signalItem(this.video_id);
      }


    });
  }

}
