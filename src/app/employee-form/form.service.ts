import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BASE_URL } from '../global';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}
  addNewUser(user) {
    return this.http.post(`${BASE_URL}/user`, user);
  }
  editUser(user) {
    return this.http.patch(`${BASE_URL}/user/${user.id}`, user);
  }
}
