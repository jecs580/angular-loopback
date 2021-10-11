import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  public libro = {
    titulo:'',
    usuarioId:0
  };
  constructor(private userService:UserService,private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.libro.usuarioId = parseInt(data.userId);
      
    })
  }
  crearLibro(){
    this.userService.postLibro(this.libro).subscribe(()=>{
    console.log('creado');
    this.router.navigateByUrl('/');
    })
  }
}
