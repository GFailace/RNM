import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { fadeAnimation } from 'src/app/animations';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css'],
  animations: [fadeAnimation]
})
export class LocationDetailsComponent implements OnInit {
  baseUrl = 'https://rickandmortyapi.com/api/location/';
  characterUrl = 'https://rickandmortyapi.com/api/character/';
  id = this.route.snapshot.params['id'];
  details = [] as any;
  residents = [] as any;
  resident = [] as any;
  resident$: Observable<any[]>;
  noResident = false;

  constructor(public apiService: ApiService, private route: ActivatedRoute, private location: Location) { }

  // Método para retornar para a útlima URL
  public backUrl() {
    this.location.back();
  }

  ngOnInit() {

    this.apiService.getLocationDetails(this.baseUrl, this.id)
      .subscribe(dados => {
        this.details = dados;
        this.residents = this.details.residents;
        // Variável utilizada para mostrar a mensagem caso não haja residentes na locação
        if (this.residents.length === 0) {
          this.noResident = true;
        }
        /* Devido ao retorno como objeto pela API,
        foi necessário mapear os valores de ID removendo a url
        e guardando os valores em um array para utilizar os valores através dos índices no template
        */
        for (let i = 0; i < this.residents.length; i++) {
          this.residents[i] = this.residents[i].replace('https://rickandmortyapi.com/api/character/', '');
        }
        /* Neste caso usei o pipe "async" no Observable somente se houver mais de um residente
        pois o retorno de somente um residente é um Objeto e mais de um residente é um Array e sendo Array
        pode ser utilizado a diretiva "ngFor".
        */
        if (this.residents.length > 1) {
          this.resident$ = this.apiService.getResidentsInfo(this.characterUrl, this.residents)
        } else {
          this.apiService.getResidentsInfo(this.characterUrl, this.residents)
            .subscribe(data => {
              this.resident = data;
            });
        }
      });
  }
}