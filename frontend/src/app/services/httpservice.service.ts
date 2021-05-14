import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor() { }

  axiosGet(url: string){
    return new Promise((resolve, reject) => {
      axios.get(url)
        // tslint:disable-next-line:only-arrow-functions typedef
        .then(function(response){
          resolve(response);
        });
    });

  }


}
