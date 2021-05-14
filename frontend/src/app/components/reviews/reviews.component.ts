import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {HttpserviceService} from '../../services/httpservice.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() id!:string;
  @Input() category!:string;
  month:string[] = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  count!:number;

  reviews = [];

  constructor(public httpService: HttpserviceService) { }

  ngOnInit(): void {
    this.getData(this.id,this.category);
  }

  getData(id:string, category:string) {
    let url = 'https://csci571-309912.wm.r.appspot.com/apis/reviews?id='+id+'&category='+category;
    this.httpService.axiosGet(url).then((data) => {
      // tslint:disable-next-line:no-unused-expression
      // @ts-ignore
      let res = data.data.res_array;
      // @ts-ignore
      this.count = data.data.count;
      for(var i=0;i<res.length;i++){
        var obj = {};
        // @ts-ignore
        obj['author'] = res[i].author;
        // @ts-ignore
        obj['content'] = res[i].content;
        // @ts-ignore
        // obj['created_at'] = res[i].created_at;
        var date = res[i].created_at;
        var m = parseInt(date.substring(5,7));
        var m_st = this.month[m-1];
        var d = parseInt(date.substring(8,10));
        var sum_date = m_st+' '+d+', ';
        sum_date+=date.substring(0,4)+', ';
        var time = parseInt(date.substring(11,13));
        if(time>12){
          time -=12;
          sum_date+=' '+time+date.substring(13,19)+' PM';
        }else if(time<12){
          sum_date+=' '+time+date.substring(13,19)+' AM';
        }else{
          sum_date+=' '+time+date.substring(13,19)+' PM';
        }
        // @ts-ignore
        obj['created_at'] = sum_date;
        // @ts-ignore
        obj['url'] = res[i].url;
        // @ts-ignore
        obj['rating'] = res[i].rating;
        // @ts-ignore
        obj['avatar_path'] = res[i].avatar_path;
        // @ts-ignore
        this.reviews.push(obj);

      }

    });
  }

}
