import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class RequestService {

  constructor(private http: HttpClient ){}

  auth(url, data) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return new Promise((resolve, reject) => {
      this.http.post(url, data, {headers: headers}).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  getAccount(url, token) {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'X-access-token': token
    });

    return new Promise((resolve, reject) => {
      this.http.get(url, {headers}).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  getCatalogs(url, token) {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'X-access-token': token
    });

    return new Promise((resolve, reject) => {
      this.http.get(url, {headers}).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  createCard(url, data, token) {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'X-access-token': token
    });

    return new Promise((resolve, reject) => {
      this.http.post(url, data, {headers}).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

}
