import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  constructor(private http : Http) { }

  playDefaultDevice() {
    let options = new RequestOptions({
      'params': {
        'access_token': 'BQDEDKuKHhj5SwebkpfieD2NW8LzlGA8NI5Y7Mn2AULO02HqVNs1Y8BRQwFUfLI25_IbLgsUSx9PPetcwaNF7W4hrM9KmBLXpqAcuz1e-q3Pu3ddASbyR6cuk4CyrnDtcoPX_R7FAjVbZ6QRbeQIlMQ388hEQ_j89JuhAHEzS6I2ugep_rK209rMDwwYpLGKCcrVY2NDmhbSQE0L'
      }
    });
    return this.http.put("https://api.spotify.com/v1/me/player/play", options).subscribe(res => {

    });
  }

  pauseDefaultDevice() {
    let headers = new Headers();
    let options = new RequestOptions({
      'headers': headers
    });
    headers.append("Authorization", "Bearer BQDEDKuKHhj5SwebkpfieD2NW8LzlGA8NI5Y7Mn2AULO02HqVNs1Y8BRQwFUfLI25_IbLgsUSx9PPetcwaNF7W4hrM9KmBLXpqAcuz1e-q3Pu3ddASbyR6cuk4CyrnDtcoPX_R7FAjVbZ6QRbeQIlMQ388hEQ_j89JuhAHEzS6I2ugep_rK209rMDwwYpLGKCcrVY2NDmhbSQE0L");
    return this.http.put("https://api.spotify.com/v1/me/player/pause", options).subscribe(res => {

    })
  }
}
