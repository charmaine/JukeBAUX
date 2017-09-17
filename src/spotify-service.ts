import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  constructor(private http : Http) { }

  playDefaultDevice() {
    return this.http.get("https://api.spotify.com/v1/me/player/devices").map.name;
  }
}
