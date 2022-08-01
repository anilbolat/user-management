import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Login} from "../_models/login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post<Login>(`https://falcao-fake-api.free.beeceptor.com/auth/login`,
      {email: email, password: password});
  }

  isLoggedIn() {
    return window.localStorage.getItem("token") != null;
  }
}
