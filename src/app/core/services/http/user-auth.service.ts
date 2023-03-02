import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../../models';
import { SignInResponse } from '../app/interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  BASE_URL = environment.nestApi.baseUrl;
  AUTH_API = environment.nestApi.paths.auth;

  constructor(private httpClient: HttpClient) {}

  signUp(user: User) {
    const url = `${this.BASE_URL}${this.AUTH_API.parent}${this.AUTH_API.children.signUp}`;
    return this.httpClient.post(url, user);
  }

  signIn(user: User) {
    const url = `${this.BASE_URL}${this.AUTH_API.parent}${this.AUTH_API.children.signIn}`;
    return this.httpClient.post<SignInResponse>(url, user);
  }
}
