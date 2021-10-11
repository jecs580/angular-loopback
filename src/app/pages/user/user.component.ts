import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usuarios:any[]=[];
  userModel={
    id:'',
    nombre:'',
    descripcion:''
  };
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }
  getUsuarios(){
    this.userService.getUsers().subscribe((data:any)=>{
      this.usuarios=data;
    })
  }
  editar(usuario:any){
    console.log(usuario);
    this.userModel= usuario;
  }
  agregarUserEditado(){
    console.log(this.userModel);
    this.userService.updateUserById(this.userModel,this.userModel.id).subscribe(()=>{
      this.getUsuarios();
    },
    (err)=>{
      console.log(err);
    })
  }
  eliminar(usuarioId:any){
    this.userService.deleteUser(usuarioId).subscribe(()=>{
      this.getUsuarios();
    },(error)=>{
      console.log(error);
    })
  }
}
