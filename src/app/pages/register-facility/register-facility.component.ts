import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-facility',
  templateUrl: './register-facility.component.html',
  styleUrls: ['./register-facility.component.css'],
})
export class RegisterFacilityComponent implements OnInit {
  form: any;
  facility: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      nomeFantasia: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      cep: new FormControl('', Validators.required),
      rua: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      complemento: new FormControl(''),
      bairro: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
    });
  }

  getAddress(cep: string) {
    this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe(
      (address: any) => {
        this.form.patchValue({
          cep: address.cep,
          rua: address.logradouro,
          numero: address.numero,
          complemento: address.complemento,
          bairro: address.bairro,
          cidade: address.localidade,
          estado: address.uf,
        });

        Object.assign(this.facility, {
          rua: address.logradouro,
          bairro: address.bairro,
          cidade: address.localidade,
          estado: address.uf,
        });
      },
      (error: any) => {
        alert('CEP inválido!');
        console.error(error);
      }
    );
  }

  onSubmit() {
    this.http
      .post(
        'https://apidadosabertos.saude.gov.br/cnes/estabelecimentos',
        this.facility
      )
      .subscribe((response: any) => {
        if (response.success) {
          alert('Cadastro efetuado com sucesso!');
        } else {
          alert('Erro ao efetuar cadastro!');
        }
      });
  }
}
