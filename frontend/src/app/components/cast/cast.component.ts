import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {HttpserviceService} from '../../services/httpservice.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {

  @Input()id!:string;
  @Input()category!:string;

  cast_array=[];

  person_name!:string;
  person_birthday!:string;

  person_gender!:string;

  person_homepage !:string;

  person_also_known_as:string[]=[];

  person_known_for_department!:string;

  person_biography!:string;
  person_place_of_birth!:string;

  person_profile_path !:string;

  cur_person_id!:string;

  closeResult = '';

  constructor(public httpService: HttpserviceService, private modalService: NgbModal) { }


  ngOnInit(): void {
    this.getData(this.id,this.category);
  }

  getData(id:string, category:string) {
    let url = 'https://csci571-309912.wm.r.appspot.com/apis/cast?id='+id+'&category='+category;
    this.httpService.axiosGet(url).then((data) => {
      // tslint:disable-next-line:no-unused-expression
      // @ts-ignore
      let res = data.data.res_array;
      // @ts-ignore
      let count = data.data.count;
      for(var i=0;i<count;i++){
        let cast_obj = {};
        // @ts-ignore
        cast_obj['id'] = res[i].id;
        // @ts-ignore
        cast_obj['name'] = res[i].name;
        // @ts-ignore
        cast_obj['character'] = res[i].character;
        // @ts-ignore
        cast_obj['profile_path'] = res[i].profile_path;
        // @ts-ignore
        this.cast_array.push(cast_obj);
      }
    });
  }

  open(content:any, pid:string, profile_path:string) {
    this.cur_person_id = pid;
    let url = 'https://csci571-309912.wm.r.appspot.com/apis/cast_detail?id='+pid;
    this.httpService.axiosGet(url).then((data) => {
      // tslint:disable-next-line:no-unused-expression
      // @ts-ignore
      let res = data.data;
      // // @ts-ignore
      // let count = data.data;
      // @ts-ignore
      this.person_name = res.name;
      // @ts-ignore
      this.person_birthday = res.birthday;
      // @ts-ignore
      this.person_gender = res.gender==2?'Male':'Female';
      // @ts-ignore
      this.person_homepage = res.homepage;
      // @ts-ignore
      this.person_also_known_as = res.also_known_as;
      // @ts-ignore
      this.person_known_for_department = res.known_for_department;
      // @ts-ignore
      this.person_biography = res.biography;
      // @ts-ignore
      this.person_place_of_birth = res.place_of_birth;
      // @ts-ignore
      this.person_profile_path = profile_path;

      });
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size:'lg',scrollable: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
