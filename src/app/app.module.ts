import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { BookComponent } from './pages/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { ListarLibrosComponent } from './pages/listar-libros/listar-libros.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BookComponent,
    AddUserComponent,
    AddBookComponent,
    ListarLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
