import { Component, OnInit } from '@angular/core';
import { FacilityService } from 'src/app/services/facility.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Facility } from 'src/app/Facility';

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
    'detalhes',
  ];

  loading: boolean = false;

  dataSource = new MatTableDataSource<Facility>();

  constructor(
    private facilityService: FacilityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;

    this.facilityService.getFacilities().subscribe((data) => {
      this.dataSource.data = data.estabelecimentos;
      this.loading = false;
    });
  }

  goToDetails(cnes: string) {
    this.router.navigate(['/estabelecimento', cnes]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterByCnes(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = (data, filter) => {
      const cnesCode = data.codigo_cnes.toString().trim();
      return cnesCode.includes(filter);
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterByRazao(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.dataSource.filterPredicate = (data, filter) => {
      return (data.nome_razao_social ?? '').toLowerCase().includes(filter);
    };
    this.dataSource.filter = filterValue;
  }

  filterByFantasia(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.dataSource.filterPredicate = (data, filter) => {
      return (data.nome_razao_social ?? '').toLowerCase().includes(filter);
    };
    this.dataSource.filter = filterValue;
  }
}
