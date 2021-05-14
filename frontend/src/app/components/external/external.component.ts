import {Component, Input, OnInit} from '@angular/core';
import {HttpserviceService} from '../../services/httpservice.service';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css']
})
export class ExternalComponent implements OnInit {

  constructor(public httpService: HttpserviceService) { }

  @Input() pid!:string;
  tooltip = 'background-color:white';

  imdb_id!:string;
  facebook_id!:string;
  instagram_id!:string;
  twitter_id!:string;

  ngOnInit(): void {
    this.getData(this.pid);
  }


  getData(id:string) {
    let url = 'https://csci571-309912.wm.r.appspot.com/apis/external_ids?id='+id;
    this.httpService.axiosGet(url).then((data) => {
      // tslint:disable-next-line:no-unused-expression
      // @ts-ignore
      let res = data.data;
      this.imdb_id = res.imdb_id;
      this.facebook_id = res.facebook_id;
      this.instagram_id = res.instagram_id;
      this.twitter_id = res.twitter_id;
    });
  }

}
