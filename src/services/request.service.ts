import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RequestService {

  constructor(private http: HttpClient ){}

  makePOST(url, data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return new Promise((resolve, reject) => {
      this.http.post(url, data, {headers: headers}).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

}
