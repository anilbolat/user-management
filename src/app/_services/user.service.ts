import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../_models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<User []>(`https://falcao-fake-api.free.beeceptor.com/users`)
  }

}
