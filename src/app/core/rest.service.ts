import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appEmail: any;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return this.http.get('assets/config.json')
      .toPromise()
      .then(data => {
        this.appEmail = data;
      });
  }

  // This is an example property ... you can make it however you want.
  get apiEmail() {

    if (!this.appEmail) {
      throw Error('Config file not loaded!');
    }

    return this.appEmail.EMAIL;
  }
}