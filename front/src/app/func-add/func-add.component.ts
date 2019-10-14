import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-func-add',
  templateUrl: './func-add.component.html',
  styleUrls: ['./func-add.component.css']
})

export class FuncAddComponent implements OnInit {

  adicionarFuncionariosForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }


  // Método responsável por tratar as validações do Form para o ADD Funcionário
  createForm() {
    this.adicionarFuncionariosForm = this.formBuilder.group({
      nomeFuncionario: ['', Validators.required],
      cargo: ['', Validators.required],
      numeroIdentificador: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
