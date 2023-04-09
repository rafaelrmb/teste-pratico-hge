import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facility } from '../Facility';
import { Observable, of } from 'rxjs';

const FACILITIES_DATA: Facility[] = [
  {
    codigo_cnes: 19046,
    nome_razao_social: 'LABORATORIO SANTA MARIA LTDA SC',
    nome_fantasia: 'LABORATORIO SANTA MARIA',
    numero_telefone_estabelecimento: '(41) 3382 - 1327',
    endereco_email_estabelecimento: 'labsanta@bol.com.br',
    numero_cnpj: '81311995000103',
  },
  {
    codigo_cnes: 647,
    nome_razao_social: 'PREFEITURA DA CIDADE DO RECIFE',
    nome_fantasia: 'US 144 POLICLINICA CLEMENTINO FRAGA',
    numero_telefone_estabelecimento: '(81) 33556048-6049',
    endereco_email_estabelecimento: 'CLEMENTINOCFRAGA@GMAIL.COM',
    numero_cnpj: null,
  },
  {
    codigo_cnes: 19690,
    nome_razao_social: 'PREF MUN FLORIANOPOLIS SMS FMS',
    nome_fantasia: 'CS PANTANAL',
    numero_telefone_estabelecimento: '(48) 32382232',
    endereco_email_estabelecimento: 'cspantanal.coord@gmail.com',
    numero_cnpj: null,
  },
  {
    codigo_cnes: 447072,
    nome_razao_social: 'PREFEITURA MUNICIPAL DE VARZEA GRANDE',
    nome_fantasia: 'ESF CABO MICHEL',
    numero_telefone_estabelecimento: null,
    endereco_email_estabelecimento: 'ubsvgcbmichel@gmal.com',
    numero_cnpj: null,
  },
  {
    codigo_cnes: 490091,
    nome_razao_social: 'PREFEITURA MUNICIPAL DE LAGOA VERMELHA',
    nome_fantasia: 'PRESIDIO ESTADUAL DE LAGOA VERMELHA',
    numero_telefone_estabelecimento: '(54)33581962',
    endereco_email_estabelecimento: null,
    numero_cnpj: null,
  },
];

@Injectable({
  providedIn: 'root',
})
export class FacilityService {
  private API_URL =
    'https://apidadosabertos.saude.gov.br/cnes/estabelecimentos';
  constructor(private http: HttpClient) {}

  getFacilities(): Observable<Facility[]> {
    //return this.http.get<Facility[]>(this.API_URL);
    return of(FACILITIES_DATA);
  }
}
