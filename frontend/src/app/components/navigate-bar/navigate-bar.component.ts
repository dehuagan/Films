import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {HttpserviceService} from '../../services/httpservice.service';
import {Router} from '@angular/router';
import {StorageService} from '../../services/storage.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-navigate-bar',
  templateUrl: './navigate-bar.component.html',
  styleUrls: ['./navigate-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigateBarComponent implements OnInit {

  model:any;

  constructor(public http:HttpClient,public httpService: HttpserviceService,public router:Router,public storage:StorageService) { }

  // search: OperatorFunction<string, readonly {name: any, flag: any}[]> = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(200),
  //     map(term => term === '' ? []
  //       : statesWithFlags.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  //   )


  // onKey(event: any) { // without type info
  //   var val = event.target.value.trim();
  //   if(val.length>0){
  //     this.getData(val);
  //     console.log('show search_res',this.search_res);
  //     console.log('filter',this.search_res.filter(v => v['title'].toLowerCase().indexOf(val.toLowerCase()) > -1));
  //   }
  //
  // }
  ngOnInit(): void {
    $(".dropdown-menu").css("background-color","rgb(5,9,50)");
    $(".my-type").css("background-color", "rgb(5,9,50)");
  }



  search_res: {id: string, title: string, category: string, img:string, poster:string}[] = [];

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term=>this.getData(term))

    )
  // search=(text$:Observable<string>)=>
  //   text$.pipe(
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     switchMap(term=>this.getData(term))
  //   )

  formatter = (x: {title: string}) => x.title;



  getData(term:any){
    let url = 'https://csci571-309912.wm.r.appspot.com/apis/search?query='+term;
    var res;
    return this.http.get<any[]>(url);


  }

  jumpNav(url:any){
    this.router.navigateByUrl('', {skipLocationChange: true}).then(() => {
      this.router.navigate([url]);
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
