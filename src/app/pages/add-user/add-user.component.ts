import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public userModel = {
    nombre:'',
    descripcion:''
  };

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
  }
  crearUser(){
    this.userService.postUser(this.userModel)
    .subscribe(()=>{
      console.log('creado');
      this.router.navigateByUrl('/');
    });
  }
}
