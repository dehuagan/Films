import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {

  constructor(public storage:StorageService,public router:Router) { }
  notExist = true;
  content = 'No items found in Watchlist.';
  items = [];


  ngOnInit(): void {
    this.getData();
  }

  getData(){
    var mylist = this.storage.get('mylist');
    if(mylist!=null&&mylist.length!=0){
      console.log('mylist.length: '+mylist.length);
      this.notExist = false;
      for(var i=mylist.length-1;i>=0;i--){
        var cur_arr = mylist[i].split(',');
        var obj = {};
        // @ts-ignore
        obj['id'] = cur_arr[0];
        // @ts-ignore
        obj['category'] = cur_arr[1];
        // @ts-ignore
        obj['img'] = cur_arr[2];
        // @ts-ignore
        this.items.push(obj);
      }
    }else{
      console.log('not exist');
      this.notExist = true;
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
