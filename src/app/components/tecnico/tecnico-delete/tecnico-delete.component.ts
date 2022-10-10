import { Component, OnInit } from '@angular/core';
import {Tecnico} from "../../../models/tecnico";
import {FormControl, Validators} from "@angular/forms";
import {TecnicoService} from "../../../services/tecnico.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css']
})
export class TecnicoDeleteComponent implements OnInit {
  tecnico: Tecnico = {
    id: '',
    nome: '',
    cpf:'',
    email:'',
    senha:'',
    perfis: [],
    dataCriacao: ''
  };

  constructor(private service: TecnicoService,
              private toast: ToastrService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tecnico.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findByID(this.tecnico.id).subscribe(resposta => {
      resposta.perfis = [];
      this.tecnico = resposta;
    })
  }

  delete(): void {
    this.service.delete(this.tecnico.id).subscribe(resposta => {
      this.toast.success("Técnico deletado com sucesso", "Delete");

    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        })
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

}
