import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAgricultoresComponent } from './components/list-agricultores/list-agricultores.component';
import { AddEditAgricultorComponent } from './components/add-edit-agricultor/add-edit-agricultor.component';

const routes: Routes = [
  { path: '', component: ListAgricultoresComponent },
  { path: 'add', component: AddEditAgricultorComponent },
  { path: 'edit/:id', component: AddEditAgricultorComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
