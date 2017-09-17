import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  constructor(private http : Http, private storage: Storage) { }

  playDefaultDevice() {
    return this.http.get("https://api.spotify.com/v1/me/player/devices").map.name;
  }

  getAuthorizationCode(arg) {
    let headers = new Headers();
    headers.append("Authorization", "Basic Y2M2MjBiM2U1MjgwNDBiOGIwMjYxY2JlNmQzZWZhODg6NWM5YmI4ZWI4YmJiNGRhYzk2NWZiZDVkODI2ZGExZjg=");
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    console.log("storage test: " + this.storage.get("code"))
    let options = new RequestOptions({
      'params': {
        'grant_type': 'authorization_code',
        'code': arg,
        'redirect_uri': 'http%3A%2F%2Flocalhost%3A8100%2F%23%2Fredirect'
      },
      'headers': headers
    });

    this.http.post("https://accounts.spotify.com/api/token", "", options).subscribe(res => {
      console.log(res.json());
      console.log(res.json().access_token);
      console.log(res.json().refresh_token);
      this.storage.set("accessToken", res.json().access_token);
      this.storage.set("refreshToken", res.json().refresh_token);
    });

    return;
  }

  addSong(song: String) {
    let options = new RequestOptions({
      "params": {
        'access_token': 'BQBGZrMInHYtP8R_riXz7h0bC5TWzbScLA-oCzh_SBnsAFMwBpGmZtvhP7TcIomBQXEnpqLq6WSs-BcSWtc0dZbtpNlNV7cSvCmbdNjt0iGQ81cr64LD66E4TCgFCQk65bo3P1__-cFJWaoJtGn12HCvdL7vhnVXYpi9VU6fqWwHcLLL6GBF7Ivx0Xh4ngQU7WI9lWbPtHwEFnzO',
        'q': song,
        'type': 'track'
      }
    });

    this.http.get("https://api.spotify.com/v1/search", options).subscribe(res => {
      let headers = new Headers();
      headers.append("Authorization", "Bearer BQBGZrMInHYtP8R_riXz7h0bC5TWzbScLA-oCzh_SBnsAFMwBpGmZtvhP7TcIomBQXEnpqLq6WSs-BcSWtc0dZbtpNlNV7cSvCmbdNjt0iGQ81cr64LD66E4TCgFCQk65bo3P1__-cFJWaoJtGn12HCvdL7vhnVXYpi9VU6fqWwHcLLL6GBF7Ivx0Xh4ngQU7WI9lWbPtHwEFnzO");
      headers.append("Content-Type", "application/json");
      let optionsTwo = new RequestOptions({
        "body": {
          "uris": ["spotify:track:6kblAEj0T0312fv5QWsXzo"]
          // res.json().tracks.items[0].uri
        },
        "headers": headers
      });

      this.http.post("https://api.spotify.com/v1/users/butterfliesandkiss/playlists/24dCO1twGY39qWC68wED6i/tracks", optionsTwo).subscribe(resTwo => {
        console.log(resTwo.json());
      });
      console.log(res)
    });

    console.log(song);
  }
}
