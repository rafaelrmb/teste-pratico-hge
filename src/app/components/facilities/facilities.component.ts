import { Component, OnInit } from '@angular/core';
import { Facility } from '../../Facility';
import { FacilityService } from 'src/app/services/facility.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css'],
})
export class FacilitiesComponent implements OnInit {
  displayedColumns: string[] = [
    'codigo_cnes',
    'nome_razao_social',
    'nome_fantasia',
    'numero_telefone_estabelecimento',
    'endereco_email_estabelecimento',
    'numero_cnpj',
  ];

  dataSource = new MatTableDataSource();

  constructor(private facilityService: FacilityService) {}

  ngOnInit(): void {
    this.facilityService.getFacilities().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
