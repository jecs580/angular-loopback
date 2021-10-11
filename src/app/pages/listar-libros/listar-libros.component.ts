import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})
export class ListarLibrosComponent implements OnInit {
  public libros:any[] =[];
  constructor(private activatedRoute:ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({userId})=>{
      this.cargarLibros(userId);
    });
  }

  cargarLibros(id:any){
    this.userService.getLibrosById(id).subscribe((data:any)=>{
      console.log(data);
      this.libros =data;
    });
  }
}
