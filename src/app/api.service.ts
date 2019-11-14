import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  character = [] as any;
  details = [] as any;
  episode = [] as any;

  constructor(private http: HttpClient) { }

  // Método para fazer a request da lista de locações
  public getLocations(url) {
    return this.http.get(url);
  }

  // Método para fazer a request de informações sobre cada locação
  public getLocationDetails(url, id) {
    return this.http.get(url + id);
  }

  // Método para fazer a request de informações sobre os residentes de cada locação
  public getResidentsInfo(url, residents) {
    return this.http.get(url + residents)
      .pipe(map(data => {
        return this.character = Object.values(data);
      }));
  }

  // Método para fazer a request de informações sobre os personagens
  public getCharDetails(baseUrl, id) {
    return this.http.get(baseUrl + id)
      .pipe(map(data => {
        return this.details = Object.values(data);
      }));
  }
  
  // Método para fazer a request de informações sobre os episódios
  public getEpisodeInfo(episodeUrl, episodes) {
    return this.http.get(episodeUrl + episodes)
      .pipe(map(data => {
        return this.episode = Object.values(data);
      }));
  }
}
