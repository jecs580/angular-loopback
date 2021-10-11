import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get(){
    return  this.http.get('https://jsonplaceholder.typicode.com/posts').pipe();
  }
  getUsers(){
    return this.http.get(`${base_url}/usuarios`).pipe();
  }
  postUser(usuario:any){
    console.log(usuario);
    return this.http.post(`${base_url}/usuarios`,usuario).pipe();
  }
  updateUserById(data:any, id:any){
    console.log(`${base_url}/${id}`);
    return this.http.patch(`${base_url}usuarios/${id}`,data).pipe();
  }
  deleteUser(id:any){
    return this.http.delete(`${base_url}usuarios/${id}`).pipe();
  }
  getLibrosById(id:any){
    return this.http.get(`${base_url}/usuarios/${id}/libros`).pipe();
  }

  postLibro(libro:any){
    console.log(libro);
    return this.http.post(`http://localhost:3000/libros`,libro).pipe();
  }
}