import { ListarLibrosComponent } from './pages/listar-libros/listar-libros.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { UserComponent } from './pages/user/user.component';
import { BookComponent } from './pages/book/book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch:'full', component:UserComponent},
  {path:'adduser', component:AddUserComponent},
  {path:'usuarios/:userId/addlibro', component:AddBookComponent},
  {path:'usuarios/:userId/libros', component:ListarLibrosComponent},
  {path:'book/:content/view/:id', component:BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
