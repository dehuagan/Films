import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpserviceService} from '../../services/httpservice.service';
import {StorageService} from '../../services/storage.service';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  video_key!:string;
  id!:any;
  category!:any;
  share_content!:string;
  title!:string;
  spoken_languages=[];
  overview!:string;
  date!:string;
  runtime!:string;
  tagline!:string;
  vote_average!:any;
  genres=[];
  isAdd!:boolean;
  btn_content!:string;

  alert_type!:string;

  successMessage = '';

  recommend_movies = 'recommended';
  recommend_movies_title = 'Recommended Movies';

  similar_movies = 'similar';
  similar_movies_title = 'Similar Movies';

  use= true;

  updateVideoId(value:string){
    this.video_key = value;
  }

  private _success = new Subject<string>();


  constructor(public route:ActivatedRoute,public httpService: HttpserviceService, public storage:StorageService) { }
  // @ts-ignore
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  ngOnInit(): void {
    // this.route.url.subscribe((data)=>{
    //   console.log('route: '+ data[2]);
    //
    // });
    this.route.url.subscribe((data)=>{
        console.log('route: '+data);
        let id = data[2];
        let category = data[1];
        console.log(id);
        console.log(category);
        this.id = id;
        this.category = category;
        this.getData(id,category);
        var mylist = this.storage.get('mylist');
        if(mylist == null||mylist.length==0){
          this.btn_content = 'Add to Watchlist';
          this.isAdd = false;
        }else{
          var flag = false;
          for(var i=0;i<mylist.length;i++){
            if(mylist[i].indexOf(id)>=0){
              this.btn_content = 'Remove from Watchlist';
              this.isAdd = true;
              flag = true;
              break;
            }
          }
         if(!flag){
            this.isAdd = false;
            this.btn_content = 'Add to Watchlist';
          }
        }



      this._success.subscribe(message => this.successMessage = message);
      this._success.pipe(debounceTime(5000)).subscribe(() => {
        if (this.selfClosingAlert) {
          this.selfClosingAlert.close();
        }
      });

        // this.getData(id,category);
    })
  }

  set(){
    var mylist = this.storage.get('mylist');
    if(mylist == null){
      mylist = new Array();
    }
    if(this.isAdd) {
      // var idx = mylist.indexOf(this.category+','+this.id);
      var idx = 0;
      for(var i=0;i<mylist.length;i++){
        if(mylist[i].indexOf(this.id)>=0){
          idx = i;
          break;
        }
      }
      mylist.splice(idx,1);
      this.storage.set('mylist',mylist);
      this.alert_type = 'danger';
      this._success.next('Removed from watchlist.');
      this.btn_content = 'Add to Watchlist';
      this.isAdd = false;
    }else{
      var cur_img = this.storage.get('cur_img');
      mylist.push(this.id+','+this.category+','+cur_img);
      this.storage.set('mylist',mylist);
      this.alert_type = 'success';
      this._success.next('Added to watchlist.');
      this.btn_content = 'Remove from Watchlist';
      this.isAdd = true;
    }

  }


  getData(id:any, category:any) {
    let url = 'https://csci571-309912.wm.r.appspot.com/apis/detail_info?id='+id+'&category='+category;
    this.httpService.axiosGet(url).then((data) => {
      // tslint:disable-next-line:no-unused-expression
      // @ts-ignore
      let res = data.data;

      console.log(res);
      this.title = res.title;
      this.spoken_languages = res.spoken_languages;
      this.genres = res.genres;
      if(category=='movie'){
        this.runtime = Math.floor(res.runtime/60)+'hrs '+res.runtime%60+'mins';
        this.date = res.release_date.substring(0,4);
      }else{
        this.runtime = res.episode_run_time[0]+'mins';
        this.date = res.first_air_date.substring(0,4);
      }

      this.tagline = res.tagline;
      this.vote_average = res.vote_average;

      this.overview = res.overview;

      this.share_content = encodeURIComponent("Watch "+this.title+"\n https://www.youtube.com/watch?v="+this.video_key+"\n" +
        "#USC #CSCI571 #FightOn");



    });
  }

}
