import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Location } from '@angular/common';
import { fadeAnimation } from '../animations';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
  animations: [fadeAnimation]
})
export class CharacterDetailsComponent implements OnInit {

  charUrl = 'https://rickandmortyapi.com/api/character/';
  episodeUrl = 'https://rickandmortyapi.com/api/episode/';
  id = this.route.snapshot.params['id'];
  details = [] as any;
  episodes = [] as any;
  episode = [] as any;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private location: Location) { }

  // Método para retornar para a útlima URL
  public backUrl() {
    this.location.back();
  }
  ngOnInit() {

    this.apiService.getCharDetails(this.charUrl, this.id)
      .subscribe(dados => {
        this.details = dados;
        this.episodes = this.details[9];
        /* Devido ao retorno como objeto pela API,
        foi necessário mapear os valores de ID removendo a url
        e guardando os valores em um array para utilizar os valores através dos índices no template
        */
        for (let i = 0; i < this.episodes.length; i++) {
          this.episodes[i] = this.episodes[i].replace('https://rickandmortyapi.com/api/episode/', '');
        }
        console.log(this.episodes);
        this.apiService.getEpisodeInfo(this.episodeUrl, this.episodes)
          .subscribe(data => {
            this.episode = data;
          });
      });
  }

}
