import { AgricultorService } from 'src/app/services/agricultor.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { cpfCnpjValidator } from '../../shared/validators';

@Component({
  selector: 'app-add-edit-agricultor',
  templateUrl: './add-edit-agricultor.component.html',
  styleUrls: ['./add-edit-agricultor.component.css']
})
export class AddEditAgricultorComponent implements OnInit {

  formAgricultor: FormGroup;
  loading: boolean = false;
  id: number;
  operacao: string = 'Adicionar';

  constructor(
    private formBuilder: FormBuilder,
    private agricultorService: AgricultorService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) {
    this.formAgricultor = this.formBuilder.group({
      razaoSocial: ["", Validators.required],
      nomeFantasia: ["", Validators.required],
      cpfCnpj: ["", [Validators.required, cpfCnpjValidator()]],
      celular: [""],
      cidade: ["", Validators.required],
      estado: ["", Validators.required],
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    if(this.id !== 0) {
      this.operacao = 'Editar';
      this.getAgricultor(this.id);
    }
  }

  getAgricultor(id: number) {
    this.loading = true;
    this.agricultorService.getAgricultor(id).subscribe((data) => {
      this.loading = false;
      this.formAgricultor.setValue({
        razaoSocial: data.razaoSocial,
        nomeFantasia: data.nomeFantasia,
        cpfCnpj: data.cpfCnpj,
        celular: data.celular,
        cidade: data.cidade,
        estado: data.estado
      })
    })

  }

  addAgricultor() {
    const agricultor: Agricultor = {
      razaoSocial: this.formAgricultor.value.razaoSocial,
      nomeFantasia: this.formAgricultor.value.nomeFantasia,
      cpfCnpj: this.formAgricultor.value.cpfCnpj,
      celular: this.formAgricultor.value?.celular,
      cidade: this.formAgricultor.value.cidade,
      estado: this.formAgricultor.value.estado
    }

    this.loading = true;
    if(this.id !== 0) {
      agricultor.id = this.id;
      this.agricultorService.updateAgricultor(this.id, agricultor).subscribe(() => {
        this.loading = false;
        this.toastr.success('Agricultor atualizado com sucesso!', 'Agricultor atualizado')
        this.router.navigate(['/']);
      })
    } else {
      this.agricultorService.addAgricultor(agricultor).subscribe(() => {
        this.loading = false;
        this.toastr.success('Agricultor adicionado com sucesso!', 'Agricultor cadastrado')
        this.router.navigate(['/']);
      })
    }
  }

}
