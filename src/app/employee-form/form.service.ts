import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BASE_URL } from '../global';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}
  addUser(user) {
    console.log(user);
    return this.http.post(`${BASE_URL}`, user);
  }
  updateUser(user) {
    return this.http.put(`${BASE_URL}/${user.id}`, user);
  }
  deleteUser(user){
    return this.http.delete(`${BASE_URL}/${user.id}`);
  }
}
