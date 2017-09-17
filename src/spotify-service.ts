import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  constructor(private http : Http) { }

  playDefaultDevice() {
    return this.http.get("https://api.spotify.com/v1/me/player/devices").map.name;
  }

  getAuthorizationCode(parameters) {
    if (parameters.indexOf("code") != -1) {
      let headers = new Headers();
      headers.append("Authorization", "Basic NjgwNGUxNWQ2MGEzNDI4N2E4Mzk2ZWJhNjkzZDllNDk6Y2NjOWM2OWY5NzMzNDNlZTk5YjFiM2Q5ZjBjMjgwNGU=");
      headers.append("Content-Type", "application/x-www-form-urlencoded");
      let options = new RequestOptions({
        'params': {
          'grant_type': 'authorization_code',
          'code': '',
          'redirect_uri': 'http://localhost:8100/#/redirect'
        },
        'headers': headers
      });
    }
    return;
  }
}
