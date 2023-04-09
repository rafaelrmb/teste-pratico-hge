import { Component, OnInit } from '@angular/core';
import { FacilityService } from 'src/app/services/facility.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

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

  dataSource = new MatTableDataSource();

  constructor(
    private facilityService: FacilityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;

    this.facilityService.getFacilities().subscribe((data) => {
      this.dataSource.data = data;
    });

    if (!this.dataSource.data.length) {
      this.loading = true;
    } else {
      this.loading = false;
    }
  }

  goToDetails(cnes: string) {
    this.router.navigate(['/details', cnes]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
