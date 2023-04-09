import { Component, OnInit } from '@angular/core';
import { FacilityService } from 'src/app/services/facility.service';
import { ActivatedRoute } from '@angular/router';
import { Facility } from 'src/app/Facility';
import * as L from 'leaflet';

@Component({
  selector: 'app-facility-details',
  templateUrl: './facility-details.component.html',
  styleUrls: ['./facility-details.component.css'],
})
export class FacilityDetailsComponent implements OnInit {
  facility: Facility = {} as Facility;
  loading: boolean = true;

  constructor(
    private facilityService: FacilityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const cnesCode: number = Number(this.route.snapshot.paramMap.get('cnes'));
    this.facilityService.getFacilityInfoByCnes(cnesCode).subscribe((data) => {
      this.facility = data;
      this.loading = false;
      this.loadMap();
    });
  }

  loadMap() {
    const map = L.map('map').setView(
      [
        this.facility.latitude_estabelecimento_decimo_grau ?? 0,
        this.facility.longitude_estabelecimento_decimo_grau ?? 0,
      ],
      15
    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([
      this.facility.latitude_estabelecimento_decimo_grau ?? 0,
      this.facility.longitude_estabelecimento_decimo_grau ?? 0,
    ])
      .addTo(map)
      .bindPopup('Aqui está o estabelecimento.')
      .openPopup();
  }
}
