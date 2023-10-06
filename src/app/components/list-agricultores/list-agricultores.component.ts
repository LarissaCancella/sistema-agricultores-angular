import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { AgricultorService } from 'src/app/services/agricultor.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-list-agricultores',
  templateUrl: './list-agricultores.component.html',
  styleUrls: ['./list-agricultores.component.css']
})
export class ListAgricultoresComponent implements OnInit {
  listAgricultores: Agricultor[] = []
  loading: boolean = false;

  constructor(
    private agricultorService: AgricultorService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAgricultores();
  }

  getAgricultores() {
    this.loading = true;
    this.agricultorService.getAgricultores().subscribe((data) => {
      this.listAgricultores = data;
      this.loading = false;
    });
  }

  deleteAgricultor(id: number) {
    this.loading = true;
    this.agricultorService.deleteAgricultor(id).subscribe(() => {
      this.getAgricultores();
      this.toastr.warning('O agricultor foi excluído com sucesso', 'Agricultor deletado')
    })
  }

  onDelete(id: number) {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteAgricultor(id);
        console.log('Item excluído');
      } else {
        console.log('Ação cancelada');
      }
    });
  }



}
