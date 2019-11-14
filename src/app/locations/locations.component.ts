import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../animations';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  animations: [fadeAnimation]
})
export class LocationsComponent implements OnInit {

  locations = [] as any;
  prev;
  next;
  residents = [] as any;
  baseUrl = 'https://rickandmortyapi.com/api/location';

  constructor(public apiService: ApiService) { }

  // Métodos de paginação
  public nextPage() {
    if (this.next !== '') {
      this.baseUrl = this.next;
      this.apiService.getLocations(this.baseUrl)
        .subscribe(dados => {
          this.locations = dados;
          this.prev = this.locations.info.prev;
          this.next = this.locations.info.next;
          this.residents = this.locations.results.residents;
        });
    }
  }

  public previousPage() {
    if (this.prev !== '') {
      this.baseUrl = this.prev;
      this.apiService.getLocations(this.baseUrl)
        .subscribe(dados => {
          this.locations = dados;
          this.prev = this.locations.info.prev;
          this.next = this.locations.info.next;
          this.residents = this.locations.results.residents;
        });
    }
  }

  ngOnInit() {
    this.apiService.getLocations(this.baseUrl)
      .subscribe(dados => {
        this.locations = dados;
        this.prev = this.locations.info.prev;
        this.next = this.locations.info.next;
        this.residents = this.locations.results.residents;
      });
  }

}
